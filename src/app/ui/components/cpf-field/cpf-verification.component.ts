import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ai-cpf-verification',
  templateUrl: './cpf-verification.component.html',
})

export class CpfVerificationComponent {
  digits: number[]
  totalDigits = 12
  cpf: string
  @Output() cpfValidity = new EventEmitter<boolean>()

  isValidCPF(): void {
    let result: boolean
    this.cpf = this.cpf.replace(/[^\d]+/g, '')
    if (this.cpf.length !== 11 || !!this.cpf.match(/(\d)\1{10}/)) {
      this.cpfValidity.emit(false)
      return
    }
    this.digits = this.cpf.split('').map(digit => +digit)
    result = this.verifyDigit(10) === this.digits[9] && this.verifyDigit(11) === this.digits[10]
    this.cpfValidity.emit(result)
  }

  verifyDigit(index: number): number {
    return (this.digits.slice(0, index-this.totalDigits).reduce( (sum, digit, i) => (sum + digit * (index-i)), 0 )*10) % 11 % 10
  }

  formatCpf(): void {
    if(this.cpf) {
      this.cpf = this.cpf.replace( /(\d{3})(\d)/ , "$1.$2")
      this.cpf = this.cpf.replace( /(\d{3})(\d)/ , "$1.$2")
      this.cpf = this.cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2")
    }
  }
}

