
import { SpachaOptions, Theme, themes, ThemeName } from "./define";
export class SpachaCore {
    protected options: SpachaOptions;
    protected scale: number = 1.0;

    constructor(options?: SpachaOptions) {
        this.options = options ?? {};
        this.init();
    }

    private init = () => {
        const themeArray = Object.keys(themes).map(key => ({ ...themes[key], name: key }));
        const randomTheme = themeArray[Math.floor(Math.random() * themeArray.length)];
        console.log(themeArray);
        console.log(randomTheme);
        this.options.price ??= randomTheme.price;
        this.options.scale ??= 1.0;
        this.scale = this.options.scale;
        //this.options.theme ??= randomTheme.name;
        this.options.themeOption ??= themes[this.options.theme ?? randomTheme.name];
        this.options.user ??= {
            name: 'YouTube User'
        };
        this.options.user.name ??= 'YouTube User';
        const img = new Image;
        img.src = "https://github.com/youtube.png"
        this.options.user.img ??= img;
        this.options.shaddow ??= true;
    }

    protected themeFromPrice = (price: number): Theme => {
        if (price < 0) {
            return themes.blue;
        }
        return Object.keys(themes).map(key => themes[key]).find(v => v.price <= price) ?? themes.blue;
    }

    protected generatePriceString = (price: number): string => {
        return "￥" + Number(this.options.price).toLocaleString();
    }
}