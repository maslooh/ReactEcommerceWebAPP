
import { Component } from "react"
import Details from "../productDetails/productDetails"
import Edit from "../productEdit/edit"
import Add from "../productAdd/Add"
export class List extends Component {
    
  products =
    [
      {
        id:0,
        name: "iphone 12",
        detailes: "4gb ram , 4000 mAmp batttery",
        code: "p120",
        quantity: 10,
        img:"p3.png"
      }
      ,
      {
        id: 1,
        name: "oppo 12",
        detailes: "6gb ram , 5000 mAmp batttery",
        code: "p110",
        quantity:30,
        img:"p2.jpg"
      },
      {
        id: 2,
        name: "oneplus 9T",
        detailes: "4gb ram , 4000 mAmp batttery",
        code: "p110",
        quantity:18,
        img:"p1.jpg"
      }
    ]
    state = {
        products:this.products,
        detailsObj: null,
        showEdit: false,
        showDetails: false,
        showAdd: false,
      }
    selectObj=(selectedObj)=> {
        this.setState({
            detailsObj:selectedObj
        })
    }
  addNewProduct = (product) => {
    let clone = this.state.products
    product.id=clone.length
    clone.push(product)
    this.setState({
      products:clone
    })
    this.addModalHide()
  }
  editProduct = (product) => {
    let clone = this.state.products
    clone[product.id]=product
    this.setState({
      products:clone
    })
    this.EditModalHide()
  }
  removeProduct = (id) => {
    let clone = this.state.products
    clone.splice(id,1)
    this.setState({
      products:clone
    })
  }
    EditModalShow = () => {
        this.setState({
        showEdit:true,
        })
    }
    EditModalHide = () => {
        this.setState({
        showEdit:false,
        })
    }
    detailsModalShow = () => {
        this.setState({
        showDetails:true,
        })
    }
    detailsModalHide = () => {
        this.setState({
            showDetails:false,
        })
    }
    addModalShow = () => {
        this.setState({
        showAdd:true,
        })
    }
    addModalHide = () => {
        this.setState({
            showAdd:false,
        })
    }
  render() {
    return (
      <>
        <table class="table table-hover table-inverse table-responsive my-5">
          <thead class="thead-inverset">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th >Code</th>
              <th >Quantity</th>
            </tr>
            </thead>
          <tbody>
            {this.state.products.map((item,index) => {
              return (
              <tr >
                <td class="col-1" >{index}</td>
                <td  class="col-3">{item.name}</td>
                <td  class="col-3">{item.code}</td>
                <td  class="col-3">{item.quantity}</td>
                      <td class="col-2 text-start">
                          <i class="fa crudIcons fa-trash mx-3 text-muted" aria-hidden="true" onClick={()=>{this.removeProduct(item.id)}}></i>
                          <i class="fa crudIcons fa-list mx-3 text-muted " aria-hidden="true" onClick={() => {
                              this.detailsModalShow()
                              this.selectObj(item)}
                              }></i>
                          <i class="fa crudIcons fa-pencil mx-3 text-muted" aria-hidden="true" onClick={() => {
                              this.EditModalShow()
                              this.selectObj(item)
                          }
                          }></i>
                </td>
              </tr>
              )
            }) }
            </tbody>
        </table>
        <button class=" btn btn-primary offset-5" aria-hidden="true" onClick={()=>this.addModalShow()}>Add Product</button>
            <Details product={this.state.detailsObj} _ref={this.detailsModalHide}  status={this.state.showDetails}  />
            <Edit _ref={this.EditModalHide}  _editRef={this.editProduct} status={this.state.showEdit} product={this.state.detailsObj} />
        <Add _ref={this.addModalHide} status={this.state.showAdd} _addRef={this.addNewProduct }/>
      </>
    );
  }
}

export default List;
