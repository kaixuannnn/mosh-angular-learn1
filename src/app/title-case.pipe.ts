import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      if (index > 0 && this.isPrepositon(word)) {
        words[index] = word.toLowerCase();
      } else {
        words[index] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }
  private toTitleCase(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }

  private isPrepositon(word: string): boolean {
    let prepositions = ['of', 'the'];
    return prepositions.includes(word.toLowerCase());
  }
}
