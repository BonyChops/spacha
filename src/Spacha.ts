import { SpachaCore } from "./SpachaCore";
import { SpachaOptions, themes } from "./define";

export class Spacha extends SpachaCore {
    private spc: HTMLElement;
    private upperDiv: HTMLElement;
    private baseDiv: HTMLElement;

    constructor(spc: HTMLElement, options: SpachaOptions) {
        super(options);
        this.spc = spc;
        this.upperDiv = document.createElement("div");
        this.baseDiv = document.createElement("div");
        this.draw();
    }

    private draw = (): void => {
        this.spc.innerHTML = '';
        const spcContainer = document.createElement("div");
        this.upperDiv = document.createElement("div");
        this.upperDiv.id = "spc-upper-div";
        this.setUpperStyle(this.upperDiv, Boolean(this.options.message));
        this.setUpperInner(this.upperDiv);

        if (this.options.message) {
            this.baseDiv = document.createElement("div");
            this.baseDiv.id = "spc-base-div";
            this.baseDiv.innerHTML = this.options.message;
            this.setMessageStyle(this.baseDiv);
        }

        spcContainer.appendChild(this.upperDiv);
        spcContainer.appendChild(this.baseDiv);

        if(this.options.shaddow){
            spcContainer.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            spcContainer.style.borderRadius = `${20 * this.scale}px`
        }
        this.spc.appendChild(spcContainer);

    }

    private setUpperStyle = (baseDiv: HTMLElement, upper: boolean): void => {
        const style = baseDiv.style;
        const r = 20 * this.scale;
        const pw = 30 * this.scale;
        const ph = 20 * this.scale;

        style.backgroundColor = this.options.themeOption?.color ?? themes.blue.color;
        style.width = "100%";
        style.height = `${150 * this.scale}px`;
        style.display = "inline-flex";
        style.boxSizing = "border-box";
        style.borderRadius = upper ? `${r}px ${r}px 0px 0px` : `${r}px`;
        style.paddingLeft = `${pw}px`;
        style.paddingRight = `${pw}px`;
        style.paddingTop = `${ph}px`;
        style.paddingBottom = `${ph}px`;
    }

    private setMessageStyle = (messageDiv: HTMLElement) => {
        const style = messageDiv.style;
        const r = 20 * this.scale;
        style.width = "100%";
        style.boxSizing = "border-box";
        style.backgroundColor = this.options.themeOption?.baseColor ?? themes.blue.baseColor;
        style.font = `${30 * this.scale}px 'sans-serif'`;
        style.padding = `${10 * this.scale}px`;
        style.borderRadius =  `0px 0px ${r}px ${r}px`;
        style.textOverflow = "ellipsis";

        style.color = this.options.themeOption?.txtColor ?? themes.blue.txtColor;
    }

    private setUpperInner = (upperDiv: HTMLElement): void => {
        const iconDiv = document.createElement("div");
        const profileDiv = document.createElement("div");
        iconDiv.id = "spc-icon-div";
        profileDiv.id = "spc-profile-div";

        iconDiv.style.width = `${110 * this.scale}px`;
        iconDiv.style.height = `${110 * this.scale}px`;

        profileDiv.style.paddingLeft = `${10 * this.scale}px`;

        this.setIconInner(iconDiv);
        this.setProfileInner(profileDiv);

        upperDiv.appendChild(iconDiv);
        upperDiv.appendChild(profileDiv);
    }

    private setIconInner = (iconDiv: HTMLElement): void => {
        const img = document.createElement("img");
        img.width = 110 * this.scale;
        img.height = 110 * this.scale;
        img.src = String(this.options.user?.img?.src);
        if(!this.options.imgOption?.square){
            img.style.borderRadius = `${110 * this.scale / 2}px`
        }

        iconDiv.appendChild(img);
    }

    private setProfileInner = (profileDiv: HTMLElement): void => {
        const nameP = document.createElement("p");
        const priceP = document.createElement("p");
        const txtColor = this.options.themeOption?.txtColor ?? themes.blue.txtColor;
        nameP.style.color = txtColor;
        priceP.style.color = txtColor;

        nameP.style.opacity = "0.7";

        nameP.style.marginTop = "10px";
        nameP.style.marginBottom = "0px";
        priceP.style.marginTop = "0px";

        nameP.style.font = `${20 * this.scale}px 'sans-serif'`;
        priceP.style.font = `${50 * this.scale}px 'sans-serif'`;

        nameP.innerHTML = this.options.user?.name ?? "YouTube User";
        priceP.innerHTML = this.options.customPriceString ?? this.generatePriceString(this.options.price ?? 0);

        profileDiv.appendChild(nameP);
        profileDiv.appendChild(priceP);
    }
}