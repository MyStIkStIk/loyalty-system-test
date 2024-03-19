import { Component } from '@angular/core';
import { SchemaService } from '../../services/schema.service';
import { SchemaModel } from '../../interfaces/schema.model';

@Component({
  selector: 'schema',
  templateUrl: './schema.component.html',
  styleUrl: './schema.component.scss'
})
export class SchemaComponent {
  protected schema: SchemaModel | null = null;

  constructor(private schemaService: SchemaService) { }

  ngOnInit() {
    this.schemaService.schema$.subscribe(schema => {
      this.schema = schema;
    });
  }
}
