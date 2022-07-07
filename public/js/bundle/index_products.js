(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1115:function(t,e,s){"use strict";s.r(e);var a=s(4),r=s(0),i=s.n(r),o=s(7);s(16);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={metaInfo:{title:"Products"},data:function(){return{serverParams:{sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],ImportProcessing:!1,data:new FormData,import_products:"",search:"",totalRows:"",isLoading:!0,spinner:!1,limit:"10",Filter_brand:"",Filter_code:"",Filter_name:"",Filter_category:"",categories:[],brands:[],products:{},warehouses:[]}},computed:l(l({},Object(a.c)(["currentUserPermissions"])),{},{columns:function(){return[{label:this.$t("image"),field:"image",type:"image",html:!0,tdClass:"text-left",thClass:"text-left"},{label:this.$t("Name_product"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Code"),field:"code",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Categorie"),field:"category",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Brand"),field:"brand",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Price"),field:"price",type:"decimal",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Unit"),field:"unit",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Quantity"),field:"quantity",type:"decimal",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{Product_PDF:function(){var t=new o.default("p","pt");t.autoTable([{title:"name",dataKey:"name"},{title:"code",dataKey:"code"},{title:"category",dataKey:"category"},{title:"brand",dataKey:"brand"},{title:"price",dataKey:"price"},{title:"unit",dataKey:"unit"},{title:"quantity",dataKey:"quantity"}],this.products),t.text("Product List",40,25),t.save("Product_List.pdf")},Show_import_products:function(){this.$bvModal.show("importProducts")},onFileSelected:function(t){this.import_products="";var e,s=t.target.files[0];s.size<1048576?e=!1:this.makeToast("danger",this.$t("file_size_must_be_less_than_1_mega"),this.$t("Failed")),!1===e&&(this.import_products=s)},Submit_import:function(){var t=this;i.a.start(),i.a.set(.1);var e=this;e.ImportProcessing=!0,e.data.append("products",e.import_products),axios.post("Products/import/csv",e.data).then((function(s){e.ImportProcessing=!1,!0===s.data.status?(t.makeToast("success",t.$t("Successfully_Imported"),t.$t("Success")),Fire.$emit("Event_import")):!1===s.data.status&&t.makeToast("danger",t.$t("field_must_be_in_csv_format"),t.$t("Failed")),i.a.done()})).catch((function(s){e.ImportProcessing=!1,i.a.done(),t.makeToast("danger",t.$t("Please_follow_the_import_instructions"),t.$t("Failed"))}))},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Products(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Products(1))},selectionChanged:function(t){var e=this,s=t.selectedRows;this.selectedIds=[],s.forEach((function(t,s){e.selectedIds.push(t.id)}))},onSortChange:function(t){var e="";e="brand"==t[0].field?"brand_id":"category"==t[0].field?"category_id":t[0].field,this.updateParams({sort:{type:t[0].type,field:e}}),this.Get_Products(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Products(this.serverParams.page)},Reset_Filter:function(){this.search="",this.Filter_brand="",this.Filter_code="",this.Filter_name="",this.Filter_category="",this.Get_Products(this.serverParams.page)},Product_Excel:function(){i.a.start(),i.a.set(.1),axios.get("Products/export/Excel",{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),s=document.createElement("a");s.href=e,s.setAttribute("download","List_Products.xlsx"),document.body.appendChild(s),s.click(),i.a.done()})).catch((function(){i.a.done()}))},setToStrings:function(){null===this.Filter_category?this.Filter_category="":null===this.Filter_brand&&(this.Filter_brand="")},Get_Products:function(t){var e=this;i.a.start(),i.a.set(.1),this.setToStrings(),axios.get("Products?page="+t+"&code="+this.Filter_code+"&name="+this.Filter_name+"&category_id="+this.Filter_category+"&brand_id="+this.Filter_brand+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.products=t.data.products,e.warehouses=t.data.warehouses,e.categories=t.data.categories,e.brands=t.data.brands,e.totalRows=t.data.totalRows,i.a.done(),e.isLoading=!1})).catch((function(t){i.a.done(),setTimeout((function(){e.isLoading=!1}),500)}))},Remove_Product:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&(i.a.start(),i.a.set(.1),axios.delete("Products/"+t).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.ProductDeleted"),"success"),Fire.$emit("Delete_Product")})).catch((function(){setTimeout((function(){return i.a.done()}),500),e.$swal(e.$t("Delete.Failed"),e.$t("Delete.AlreadyLinked"),"warning")})))}))},delete_by_selected:function(){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(e){e.value&&(i.a.start(),i.a.set(.1),axios.post("Products/delete/by_selection",{selectedIds:t.selectedIds}).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.ProductDeleted"),"success"),Fire.$emit("Delete_Product")})).catch((function(){setTimeout((function(){return i.a.done()}),500),t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var t=this;this.Get_Products(1),Fire.$on("Delete_Product",(function(){t.Get_Products(t.serverParams.page),setTimeout((function(){return i.a.done()}),500)})),Fire.$on("Event_import",(function(){setTimeout((function(){t.Get_Products(t.serverParams.page),t.$bvModal.hide("importProducts")}),500)}))}},u=s(2),_=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:t.$t("productsList"),folder:t.$t("Products")}}),t._v(" "),t.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):s("div",[s("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.products,"select-options":{enabled:!0,clearSelectionText:""},"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"tableOne vgt-table"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch,"on-selected-rows-change":t.selectionChanged},scopedSlots:t._u([{key:"table-row",fn:function(e){return["actions"==e.column.field?s("span",[t.currentUserPermissions&&t.currentUserPermissions.includes("products_view")?s("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"View",to:{name:"detail_product",params:{id:e.row.id}}}},[s("i",{staticClass:"i-Eye text-25 text-info"})]):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("products_edit")?s("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit",to:{name:"edit_product",params:{id:e.row.id}}}},[s("i",{staticClass:"i-Edit text-25 text-success"})]):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("products_delete")?s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(s){return t.Remove_Product(e.row.id)}}},[s("i",{staticClass:"i-Close-Window text-25 text-danger"})]):t._e()],1):"image"==e.column.field?s("span",[s("b-img",{attrs:{thumbnail:"",height:"50",width:"50",fluid:"",src:"/images/products/"+e.row.image,alt:"image"}})],1):t._e()]}}])},[s("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[s("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.delete_by_selected()}}},[t._v(t._s(t.$t("Del")))])]),t._v(" "),s("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-info m-1",size:"sm"}},[s("i",{staticClass:"i-Filter-2"}),t._v("\n          "+t._s(t.$t("Filter"))+"\n        ")]),t._v(" "),s("b-button",{attrs:{size:"sm",variant:"outline-success m-1"},on:{click:function(e){return t.Product_PDF()}}},[s("i",{staticClass:"i-File-Copy"}),t._v(" PDF\n        ")]),t._v(" "),s("b-button",{attrs:{size:"sm",variant:"outline-danger m-1"},on:{click:function(e){return t.Product_Excel()}}},[s("i",{staticClass:"i-File-Excel"}),t._v(" EXCEL\n        ")]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("product_import")?s("b-button",{attrs:{size:"sm",variant:"info m-1"},on:{click:function(e){return t.Show_import_products()}}},[s("i",{staticClass:"i-Download"}),t._v("\n          "+t._s(t.$t("import_products"))+"\n        ")]):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("products_add")?s("router-link",{staticClass:"btn-sm btn btn-primary btn-icon m-1",attrs:{to:"/app/products/store"}},[s("span",{staticClass:"ul-btn__icon"},[s("i",{staticClass:"i-Add"})]),t._v(" "),s("span",{staticClass:"ul-btn__text ml-1"},[t._v(t._s(t.$t("Add")))])]):t._e()],1)]),t._v(" "),s("b-sidebar",{attrs:{id:"sidebar-right",title:t.$t("Filter"),"bg-variant":"white",right:"",shadow:""}},[s("div",{staticClass:"px-3 py-2"},[s("b-row",[s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("CodeProduct")}},[s("b-form-input",{attrs:{label:"Code Product",placeholder:t.$t("SearchByCode")},model:{value:t.Filter_code,callback:function(e){t.Filter_code=e},expression:"Filter_code"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("ProductName")}},[s("b-form-input",{attrs:{label:"Name Product",placeholder:t.$t("SearchByName")},model:{value:t.Filter_name,callback:function(e){t.Filter_name=e},expression:"Filter_name"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("Categorie")}},[s("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Category"),options:t.categories.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.Filter_category,callback:function(e){t.Filter_category=e},expression:"Filter_category"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("Brand")}},[s("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Brand"),options:t.brands.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.Filter_brand,callback:function(e){t.Filter_brand=e},expression:"Filter_brand"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{variant:"primary m-1",size:"sm",block:""},on:{click:function(e){return t.Get_Products(t.serverParams.page)}}},[s("i",{staticClass:"i-Filter-2"}),t._v("\n              "+t._s(t.$t("Filter"))+"\n            ")])],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{variant:"danger m-1",size:"sm",block:""},on:{click:function(e){return t.Reset_Filter()}}},[s("i",{staticClass:"i-Power-2"}),t._v("\n              "+t._s(t.$t("Reset"))+"\n            ")])],1)],1)],1)]),t._v(" "),s("b-modal",{attrs:{"ok-only":"","ok-title":"Cancel",size:"md",id:"importProducts",title:t.$t("import_products")}},[s("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.Submit_import.apply(null,arguments)}}},[s("b-row",[s("b-col",{staticClass:"mb-3",attrs:{md:"12",sm:"12"}},[s("b-form-group",[s("input",{attrs:{type:"file",label:"Choose File"},on:{change:t.onFileSelected}}),t._v(" "),s("b-form-invalid-feedback",{staticClass:"d-block",attrs:{id:"File-feedback"}},[t._v(t._s(t.$t("field_must_be_in_csv_format")))])],1)],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{type:"submit",variant:"primary",disabled:t.ImportProcessing,size:"sm",block:""}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.ImportProcessing?t._m(0):t._e()],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{href:"/import/exemples/import_products.csv",variant:"info",size:"sm",block:""}},[t._v(t._s(t.$t("Download_exemple")))])],1),t._v(" "),s("b-col",{attrs:{md:"12",sm:"12"}},[s("table",{staticClass:"table table-bordered table-sm mt-4"},[s("tbody",[s("tr",[s("td",[t._v(t._s(t.$t("Name_product")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Field_is_required")))])])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("CodeProduct")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Field_is_required")))]),t._v("\n                    "+t._s(t.$t("code_must_be_not_exist_already"))+"\n                  ")])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("Categorie")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Field_is_required")))])])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("ProductCost")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Field_is_required")))])])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("ProductPrice")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Field_is_required")))])])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("UnitProduct")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Field_is_required")))]),t._v("\n                    "+t._s(t.$t("must_be_exist"))+" "+t._s(t.$t("Please_use_short_name_of_unit"))+"\n                  ")])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("Brand")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Field_optional")))])])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("StockAlert")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Field_optional")))])])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("Note")))]),t._v(" "),s("th",[s("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Field_optional")))])])])])])])],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null);e.default=_.exports}}]);