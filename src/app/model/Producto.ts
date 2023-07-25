export class Producto {
  constructor(
    public prod_id: number,
    public prod_nombre: String,
    public categoria: {
      cat_id: number
    },
  public proveedor:{
     prov_id:number
   },
    public prov_foto: String,
    public precio: number,
    public prod_foto: String,
    public prod_url: String
  ) {}
}
