export interface SchemaModel {
    name: string;
    text: string;
    color: string;
    elements: ElementModel[];
}

export interface ElementModel {
    name: string;
    text: string;
    type: string;
}