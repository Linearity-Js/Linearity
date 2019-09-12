import { Component, OnInit, Input } from '@angular/core';
import { MatrixService } from '../matrix.service';
import { faTrash, faCopy, faEdit, faItalic, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { delay } from 'q';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faGoogle, faTumblr } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input() public name: string;


  closeResult: string;
  matrixForm: FormGroup;
  demoForm: FormGroup;

  arrayItems: {
    id: number;
    title: string;
  }[];

  copyText = 'Copy';
  trashText = 'Clean';
  editText = 'Edit';
  identityText = 'Identity matrix';
  transText = 'Transposed matrix';
  transformationsText = 'Transform';

  titleClear = 'Clean all matrix';
  titleCopy = 'Copy the matrix';
  titleEdit = 'Edit matrix';
  titleIndentity = 'Identity';
  titleTransformations = 'Transform';

  trash = faTrash;
  copy = faCopy;
  edit = faEdit;

  transform = faSpinner;

  private matrix;
  public colNumber;
  public openSymbol = '[';
  public clseSymbol = ']';

  public padding1 = 5;
  public padding2 = 5;
  public bracket = 2;

  getMatrix() {
    return this.matrix;
  }

  constructor(private matrixService: MatrixService, private formBuilder: FormBuilder, private modalService: NgbModal) {
    // this.matrix = [
    //   { x: 1, y: 2, z: 3 },
    //   { x: 1, y: 2, z: 3 },
    //   { x: 1, y: 2, z: 3 }
    // ];


    this.matrix = [
      [{ 0: 1, 1: 2, 2: 3 }],
      [{ 0: 1, 1: 2, 2: 3 }],
      [{ 0: 1, 1: 2, 2: 3 }]
    ];


    // this.matrix = [['1', '0'], ['2', '0'], ['0', '0']];
    // this.matrix = [['1', '2', '0'], ['1', '1', '0'], ['1', '2', '3']];
    this.matrix = [['1', '2', '0', '1'], ['1', '1', '2', '1'], ['1', '1', '0', '1'], ['0', '1', '1', '0']];
    this.getColNumber();
    this.setPaddingConfig();

    this.demoForm = this.formBuilder.group({
      demoArray: this.formBuilder.array([])
    });
  }

  ngOnInit() {

    // this.matrixForm = this.formBuilder.group(this.matrix);

    // this.matrixForm.valueChanges.subscribe(console.log);

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  getColNumber() {
    if (this.matrix.length >= 1 && this.matrix.length <= 6 && this.matrix.length !== 5) {
      this.colNumber = 12 / this.matrix.length;
    } else {
      if (this.matrix.length === 5) {
        this.colNumber = 2;
      } else {
        this.colNumber = 1;
      }
    }
  }

  getMatrixRows() {
    return this.matrix[0].length;
  }

  getMatrixCols() {
    return this.matrix.length;
  }

  upMatrix() {
    window.alert('Your matrix is up!');
    this.matrixService.setMatrix(this.matrix);
  }

  cleanMatrix() {
    let i;
    const n = this.matrix.length;
    for (i = 0; i < n; ++i) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  onChange(newValue, coeficient1, coeficient2) {
    this.matrix[coeficient1][coeficient2] = Number(newValue.target.value);
    // this.matrix[coeficient1].splice(coeficient1, 1, newValue.target.value);
    // sconsole.info(this.matrix);
    // tslint:disable-next-line:max-line-length
    console.log(`c1: ${coeficient1}`, `c2: ${coeficient2}`, `real value: ${this.matrix[coeficient1][coeficient2]}`, `expected value: ${newValue.target.value}`);
  }

  identity() {

  }

  trans() {

  }
  setPaddingConfig() {

    switch (this.getMatrixRows()) {
      case 1:
        this.padding1 = 2;
        this.padding2 = 2;
        break;
      case 2:
        this.padding1 = 2;
        this.padding2 = 4;
        break;
      case 3:
        this.padding1 = 4;
        this.padding2 = 4;
        break;
      case 4:
        this.padding1 = 5;
        this.padding2 = 4;
        break;
      case 8:
        this.padding1 = 5;
        this.padding2 = 5;
        this.bracket = 3;
        break;
      case 9:
        this.padding1 = 5;
        this.padding2 = 5;
        this.bracket = 3;
        break;
      case 10:
        this.padding1 = 5;
        this.padding2 = 5;
        this.bracket = 3;
        break;
      case 11:
        this.padding1 = 5;
        this.padding2 = 5;
        this.bracket = 3;
        break;
      case 12:
        this.padding1 = 5;
        this.padding2 = 5;
        this.bracket = 3;
        break;

      default:
        this.padding1 = 5;
        this.padding2 = 4;
        break;
    }
  }
}
