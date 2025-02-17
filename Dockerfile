FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json /
RUN npm install
COPY . .

FROM base AS build
# TC BUILD ENVIRONMENT VARIABLES
ARG BUILD_DATE
ARG TC_BUILD
ARG STRAPI_API_BACKEND_URL
ARG NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ARG NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
ENV NEXT_PUBLIC_BUILD_DATE=$BUILD_DATE
ENV NEXT_PUBLIC_TC_BUILD=$TC_BUILD
ENV STRAPI_API_BACKEND_URL=$STRAPI_API_BACKEND_URL
ENV NEXT_PUBLIC_ADOBE_ANALYTICS_URL=$NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ENV NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL=$NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
# END OF ENVIRONMENT VARIABLES
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ENV NODE_ENV=production
ENV REPORT_A_PROBLEM_ENABLED=true
ENV NOTIFY_BASE_API_URL=https://api.notification.canada.ca
ENV MONGO_URL=""
ENV MONGO_DB=""
ENV NOTIFY_API_KEY=""
ENV USER_SIGNUP_FRENCH_TEMPLATE_ID=""
ENV USER_SIGNUP_ENGLISH_TEMPLATE_ID=""
ENV NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID=""
ENV NEXT_PUBLIC_ADOBE_ANALYTICS_URL=""
ENV NEXT_PUBLIC_THANK_YOU_EMAIL=""
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/next-i18next.config.js ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start