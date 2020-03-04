import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'UrlSW'
})

export class UrlPipe implements PipeTransform {
    transform(value: string): string {
        return encodeURI(value);
    }
}