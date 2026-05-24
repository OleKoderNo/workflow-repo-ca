import { describe, expect, it } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
	it("returns true when current path matches href exactly", () => {
		expect(isActivePath("/login", "/login")).toBe(true);
	});

	it("returns true for root path when current path is /", () => {
		expect(isActivePath("/", "/")).toBe(true);
	});

	it("returns true for root path when current path is /index.html", () => {
		expect(isActivePath("/", "/index.html")).toBe(true);
	});

	it("returns true when current path includes the href", () => {
		expect(isActivePath("/venues", "/venues/details/index.html")).toBe(true);
	});

	it("returns false when paths don't match", () => {
		expect(isActivePath("/login", "/register")).toBe(false);
	});
});
