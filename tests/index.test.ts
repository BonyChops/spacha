import Canvas from "canvas";
import {SpachaImage} from "../src/";

describe("Spacha() TEST", () => {
    it('Run Spacha()', () => {
        const log = jest.spyOn(console, 'log').mockReturnValue();

        const canvas = new Canvas.Canvas(600, 300);
        const ctx = canvas.getContext("2d");
        new SpachaImage(ctx, {
            message: "hello"
        });

        expect(log).toHaveBeenCalledTimes(0);
    })
})