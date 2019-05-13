import { Directive, HostListener, Input } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[cpfMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CpfDirective,
    multi: true
  }]
})
export class CpfDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  constructor() { }


  // @Input('cpfMask') value: string;

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event']) onKeyup($event: any) {
    let cpf: string = $event.target.value;

    if (cpf.length > 14) { cpf = cpf.substring(0, 14); }

    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    $event.target.value = cpf;
  }

  @HostListener('blur', ['$event']) onBlur($event: any) {
    let cpf: string = $event.target.value;

    if (cpf.length > 14) { cpf = cpf.substring(0, 14); }

    this.onChange('');
    $event.target.value = '';
  }
}
