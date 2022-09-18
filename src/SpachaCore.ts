import { SpachaOptions, Theme, themes } from './define';
export class SpachaCore {
  protected options: SpachaOptions;
  protected scale = 1.0;

  constructor(options?: SpachaOptions) {
    this.options = options ?? {};
    this.init();
  }

  private init = () => {
    const options = { ...this.options };
    const themeArray = Object.keys(themes).map((key) => ({
      ...themes[key],
      name: key,
    }));
    const randomTheme =
      themeArray[Math.floor(Math.random() * themeArray.length)];
    options.price ??= randomTheme.price;
    options.scale ??= 1.0;
    this.scale = options.scale;
    //options.theme ??= randomTheme.name;
    options.themeOption ??= options.theme
      ? themes[options.theme ?? randomTheme.name]
      : this.themeFromPrice(options.price);
    options.user ??= {
      name: 'YouTube User',
    };
    options.user.name ??= 'YouTube User';
    options.shaddow ??= true;

    this.options = options;
  };

  protected themeFromPrice = (price: number): Theme => {
    if (price < 0) {
      return themes.blue;
    }
    return (
      Object.keys(themes)
        .map((key) => themes[key])
        .reverse()
        .find((v) => v.price <= price) ?? themes.blue
    );
  };

  protected generatePriceString = (price: number): string => {
    return '￥' + Number(price).toLocaleString();
  };
}
