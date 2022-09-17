import { SpachaCore } from './SpachaCore';
import { SpachaOptions, themes } from './define';

export class SpachaImage extends SpachaCore {
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D, options?: SpachaOptions) {
    super(options);
    this.ctx = ctx;
    this.job();
  }

  job = (): void => {
    const canvas = this.ctx.canvas;
    this.options.width ??= canvas.width;
    if (this.options.width !== canvas.width) {
      canvas.width = this.options.width;
    }
    if (!this.options.height) {
      this.options.heightAutoFix ??= true;
    }
    this.options.height ??= canvas.clientHeight;
    if (this.options.height !== canvas.height) {
      canvas.height = this.options.height;
    }

    this.draw();
  };

  public draw = (): void => {
    const canvas = this.ctx.canvas;
    if (this.options.message) {
      let ty;
      if (this.options.heightAutoFix) {
        const y = 150 * this.scale;
        const offset = 10 * this.scale;
        ty = this.printString(
          this.options.message ?? 'error',
          0,
          0,
          32 * this.scale,
          (this.options.width ?? 600) - 10,
          false
        );
        this.options.height = y + ty + offset * 2;
        canvas.height = this.options.height;
      }

      this.drawRounedSq(true);
      this.drawRoundedSqCm();
    } else {
      if (this.options.heightAutoFix) {
        canvas.height = 150;
      }
      this.drawRounedSq(false);
    }
  };

  private drawRounedSq = (cm: boolean): void => {
    const ctx = this.ctx;
    const x = 0,
      y = 0;
    const w = this.options.width ?? 600;
    const h = cm ? 150 * this.scale : this.options.height ?? 150;
    const r = 20 * this.scale;
    const color = this.options.themeOption?.color ?? themes.blue.baseColor;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.moveTo(x, y + r / 2);
    if (cm) {
      ctx.lineTo(x, y + h);
      ctx.lineTo(x + w, y + h);
    } else {
      ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true);
      ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, true);
    }
    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, true);
    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, true);
    ctx.closePath();
    ctx.stroke();

    ctx.fill();
    this.iconDraw();
    this.profileDraw();
  };

  private drawRoundedSqCm = (): void => {
    const ctx = this.ctx;
    const x = 0,
      y = 150 * this.scale;
    const w = this.options.width ?? 600;
    const h = this.options.height ?? 150;
    const r = 20 * this.scale;

    ctx.lineWidth = 1;
    ctx.strokeStyle = this.options.themeOption?.color ?? themes.blue.color;
    ctx.fillStyle =
      this.options.themeOption?.baseColor ?? themes.blue.baseColor;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x + r, h - r, r, Math.PI, Math.PI * 0.5, true);
    ctx.arc(x + w - r, h - r, r, Math.PI * 0.5, 0, true);
    ctx.lineTo(x + w, y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    this.printString(
      this.options.message ?? 'error',
      x + 20 * this.scale,
      y + 32 * this.scale,
      32 * this.scale,
      (this.options.width ?? 600) - 10,
      true
    );
  };

  private printString = (
    text: string,
    x: number,
    y: number,
    lineHeight: number,
    fitWidth: number,
    draw: boolean
  ): number => {
    const ctx = this.ctx;
    ctx.font = `${30 * this.scale}px 'sans-serif'`;
    ctx.fillStyle = this.options.themeOption?.txtColor ?? 'white';
    fitWidth = fitWidth || 0;

    if (fitWidth <= 0) {
      if (draw) {
        ctx.fillText(text, x, y);
      }
      return y + lineHeight;
    }

    for (let idx = 1; idx <= text.length; idx++) {
      const str = text.substring(0, idx);
      if (ctx.measureText(str).width > fitWidth) {
        if (draw) {
          ctx.fillText(text.substring(0, idx - 1), x, y);
        }
        const r = this.printString(
          text.substring(idx - 1),
          x,
          y + lineHeight,
          lineHeight,
          fitWidth,
          draw
        );
        return r;
      }
    }
    if (draw) {
      ctx.fillText(text, x, y);
    }
    return y + lineHeight;
  };

  private iconDraw = (): void => {
    const ctx = this.ctx;
    const img = this.options.user?.img;

    const w = 110 * this.scale;
    ctx.save();
    const x = 30 * this.scale;
    const y = 20 * this.scale;
    if (!this.options.imgOption?.square) {
      ctx.beginPath();
      ctx.arc(x + w / 2, y + w / 2, w / 2, 0, Math.PI * 2);
      ctx.closePath();
    }

    ctx.clip();
    if (img) {
      ctx.drawImage(img, x, y, w, w);
    } else {
      ctx.fillStyle = 'black';
      ctx.fill();
    }
    ctx.restore();
  };

  private profileDraw = (): void => {
    const ctx = this.ctx;
    ctx.fillStyle = this.options.themeOption?.txtColor ?? 'white';
    ctx.font = `${20 * this.scale}px 'sans-serif'`;
    ctx.globalAlpha = 0.7;
    ctx.fillText(
      this.options.user?.name ?? 'error',
      150 * this.scale,
      45 * this.scale
    );
    ctx.globalAlpha = 1;
    ctx.font = `${50 * this.scale}px 'sans-serif'`;
    ctx.fillText(
      this.options.customPriceString ??
        this.generatePriceString(this.options.price ?? 0),
      150 * this.scale,
      95 * this.scale
    );
  };
}
