import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatrixService } from '../matrix.service';
import { faTrash, faCopy, faEdit, faSpinner, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Matrix } from '../matrix.model';


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css'],
  providers: [NgbAlertConfig]
})
export class MatrixComponent implements OnInit {
  @Input() public name: string;
  @Input() private matrix: Matrix;
  @Input() public edit: boolean;
  @Input() public hide: boolean;
  @Input() public show: boolean;

  n; m;

  showMessage: boolean;
  showMatrix: boolean;
  public message: string;

  closeResult: string;
  matrixForm: FormGroup;
  demoForm: FormGroup;

  copyText = 'Copy';
  trashText = 'Clean';
  editText = 'Edit';
  identityText = 'Identity matrix';
  transText = 'Transposed matrix';
  transformationsText = 'Transform';
  sizeText = 'Size';

  titleClear = 'Clean all matrix';
  titleCopy = 'Copy the matrix';
  titleEdit = 'Edit matrix';
  titleIndentity = 'Identity';
  titleTransformations = 'Transform';

  iconTrash = faTrash;
  iconCopy = faCopy;
  iconEdit = faEdit;
  iconSize = faBorderAll;
  transform = faSpinner;


  public colNumber;
  public openSymbol = '[';
  public clseSymbol = ']';

  public padding1 = 5;
  public padding2 = 5;
  public bracket = 2;


  constructor(private matrixService: MatrixService, private modalService: NgbModal, alertConfig: NgbAlertConfig) {
    this.matrix = new Matrix(1, `A`, [[1, 2, 0], [1, 1, 0], [1, 2, 3]]);
    // this.matrix.data = [[1, 2, 0], [1, 1, 0], [1, 2, 3]];
    this.m = this.matrixService.getMatrixRows(this.matrix);
    this.n = this.matrixService.getMatrixCols(this.matrix);
    this.message = `invalid matrix`;
    this.setVisible(true);
    this.getColNumber();
    this.setPaddingConfig();

    alertConfig.type = 'danger';
  }


  private setVisible(visible: boolean) {
    if (this.show) {
      if (visible) {
        this.showMessage = false;
        this.showMatrix = true;
      } else {
        this.message = this.matrix.message;
        console.log(this.matrix.message);
        this.showMessage = true;
        this.showMatrix = false;
      }

    } else {
      this.showMessage = false;
      this.showMatrix = false;
    }
  }

  getMatrix() {
    return this.matrix.matrix;
  }

  ngOnInit() {
    this.setVisible(true);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.setVisible(this.matrixService.validMatrix(this.matrix));
  }

  setSize(row, col) {
    if (this.matrixService.validateSize(row, col)) {
      this.matrix.matrix = this.matrixService.setSize(this.matrix, row, col);
      this.m = this.matrixService.getMatrixRows(this.matrix);
      this.n = this.matrixService.getMatrixCols(this.matrix);
    } else {
      const fixednumbs = this.matrixService.fixSize(this.m, this.n);
      this.m = fixednumbs[0];
      this.n = fixednumbs[1];
      this.setSize(fixednumbs[0], fixednumbs[1]);
    }
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
    if (this.matrix.matrix.length >= 1 && this.matrix.matrix.length <= 6 && this.matrix.matrix.length !== 5) {
      this.colNumber = 12 / this.matrix.matrix.length;
    } else {
      if (this.matrix.matrix.length === 5) {
        this.colNumber = 2;
      } else {
        this.colNumber = 1;
      }
    }
  }

  getMatrixRows() {
    return this.matrixService.getMatrixRows(this.matrix);
  }

  getMatrixCols() {
    return this.matrixService.getMatrixCols(this.matrix);
  }

  upMatrix() {
    window.alert('Your matrix is up!');
    this.matrixService.setMatrix(this.matrix);
  }

  cleanMatrix() {
    this.matrixService.cleanMatrix(this.matrix);
  }

  onChange(newValue, coeficient1, coeficient2) {
    this.matrix.matrix[coeficient1][coeficient2] = Number(newValue.target.value);
  }

  identity() {
    this.matrixService.getIdentity(this.matrix);
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
