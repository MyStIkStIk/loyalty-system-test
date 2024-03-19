import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SchemaModel } from '../interfaces/schema.model';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  private schema: BehaviorSubject<SchemaModel | null> = new BehaviorSubject<SchemaModel | null>(null);
  public schema$ = this.schema.asObservable();

  constructor(http: HttpClient) {
    http.post('https://core.lsbonus.com/core/testSchema', {}).subscribe(response => {
      let json = JSON.stringify(response);
      let result = JSON.parse(json);

      this.schema.next(result.schema as SchemaModel);
    });
   }
}
