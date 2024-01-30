import { Component, Input } from "@angular/core";

export type BaseData = {
  // TODO: update type
  classes?: string;
};

@Component({
  selector: "appprefix-base",
  templateUrl: "./base.html",
})
export class BaseComponent {
  @Input() data: BaseData;

  // @Input() emit: (type: string, payload?: unknown) => void;

  // onClick(value) {
  //   if (!this.emit) return;
  //   this.emit('click', value);
  // }
}
