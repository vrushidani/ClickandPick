import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector : '[setBackground]'
})
export class SetBackground{

    // @Input() backColor : string = "#36454F";
    // @Input() textColor : string = "white";

    @Input('setBackground') changeTextandBackColor : { backColor : string, textColor : string}

    constructor(private element : ElementRef, private renderer : Renderer2){
    }
    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor', this.changeTextandBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextandBackColor.textColor)

    }

}