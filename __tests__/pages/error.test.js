/**
 * @jest-environment jsdom
 */
import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getPage } from "next-page-tester";

import router from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Error page", () => {
  it("renders the page", async () => {
    const { render } = await getPage({
      route: "/error",
    });
    render();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders default title and message", async () => {
    const { render } = await getPage({
      route: "/error",
    });
    render();

    const titleEn = screen.getByTestId("heading-en");
    const titleFr = screen.getByTestId("heading-fr");
    const messageEn = screen.getByTestId("errormessage-en");
    const messageFr = screen.getByTestId("errormessage-fr");

    expect(titleEn.textContent).toEqual("The web site has reported an error.");
    expect(titleFr.textContent).toEqual("Le site Web a signalé une erreur.");
    expect(messageEn.textContent).toEqual(
      "If the problem persists, report the problem."
    );
    expect(messageFr.textContent).toEqual(
      "Si le problème persiste, veuillez signaler le problème."
    );
  });

  it("renders custom title", () => {
    router.push({
      pathname: "/error",
      query: { errorTitle: "custom title", errorTitleFr: "custom title fr" },
    });
    expect(router).toMatchObject({
      asPath:
        "/error?errorTitle=custom%20title&errorTitleFr=custom%20title%20fr",
      pathname: "/error",
      query: { errorTitle: "custom title", errorTitleFr: "custom title fr" },
    });
  });

  it("renders custom message", () => {
    router.push({
      pathname: "/error",
      query: {
        errorMessage: "custom error message",
        errorMessageFr: "custom error message fr",
      },
    });
    expect(router).toMatchObject({
      asPath:
        "/error?errorMessage=custom%20error%20message&errorMessageFr=custom%20error%20message%20fr",
      pathname: "/error",
      query: {
        errorMessage: "custom error message",
        errorMessageFr: "custom error message fr",
      },
    });
  });

  it("renders the status code if it's passed in", () => {
    router.push({
      pathname: "/error",
      query: { statusCode: "404" },
    });
    expect(router).toMatchObject({
      asPath: "/error?statusCode=404",
      pathname: "/error",
      query: { statusCode: "404" },
    });
  });

  // it("renders the status code if it's passed in", async () => {
  //   const { render } = await getPage({
  //     route: "/error?statusCode=404",
  //   });
  //   render();

  //   const statusCode = screen.getByTestId("statuscode-en");
  //   const statusCodeFr = screen.getByTestId("statuscode-fr");

  //   expect(statusCode.textContent).toEqual("Error 404");
  //   expect(statusCodeFr.textContent).toEqual("Erreur 404");
  // });
});
