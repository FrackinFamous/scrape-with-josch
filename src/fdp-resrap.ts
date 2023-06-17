// import * as fs from 'fs';
// import pdfParse = require('pdf-parse');

// function pdfParse(dataBuffer: Buffer, options?: PdfOptions): Promise<PdfData>;

// interface PdfOptions {
//     pagerender?: Function;
//     version?: string;
//     max?: number;
//     firstPage?: number;
//     lastPage?: number;
//     ignore?: any;
// }

// interface PdfData {
//     numpages: number;
//     numrender: number;
//     info: PdfInfo;
//     metadata: PdfMetadata;
//     version: string;
//     text: string;
// }

// interface PdfInfo {
//     PDFFormatVersion: string;
//     IsAcroFormPresent: boolean;
//     IsXFAPresent: boolean;
//     IsCollectionPresent: boolean;
//     IsLinearized: boolean;
//     IsSignaturesPresent: boolean;
// }

// interface PdfMetadata {
//     'dc:title': string;
//     'dc:creator': string;
//     'dc:subject': string;
//     'dc:producer': string;
//     'dc:keywords': string;
//     'pdf:PDFVersion': string;
//     'pdf:docinfo:creator_tool': string;
//     'xmp:CreatorTool': string;
//     'xmpMM:RenditionClass': string;
//     'xmpTPg:NPages': string;
//     'xmpTPg:MaxPageSize': string;
//     'xmpTPg:MaxPageHeight': string;
//     'xmpTPg:MaxPageWidth': string;
//     'xmpTPg:PlateNames': string;
//     'xmpTPg:Fonts': string;
//     'xmpTPg:Colorants': string;
//     'xmpTPg:SwatchGroups': string;
//     'xmpTPg:TemplateInstantiated': string;

// }

// let dataBuffer: Buffer = fs.readFileSync('pdf.pdf');

// pdfParse(pdf).then((data: any) => {
//     console.log(data.text);  
// }).catch((err: any) => {
//     console.error(err);
// });

