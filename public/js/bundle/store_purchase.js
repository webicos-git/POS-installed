(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1138:function(t,e,a){"use strict";a.r(e);var s=a(4),i=a(0),r=a.n(i);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={metaInfo:{title:"Create Purchase"},data:function(){return{focused:!1,timer:null,search_input:"",product_filter:[],isLoading:!0,SubmitProcessing:!1,warehouses:[],suppliers:[],products:[],details:[],units:[],detail:{quantity:"",discount:"",Unit_cost:"",discount_Method:"",tax_percent:"",tax_method:""},purchases:[],purchase:{id:"",date:(new Date).toISOString().slice(0,10),statut:"received",notes:"",supplier_id:"",warehouse_id:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},total:0,GrandTotal:0,product:{id:"",code:"",stock:"",quantity:1,discount:"",DiscountNet:"",discount_Method:"",name:"",unitPurchase:"",purchase_unit_id:"",fix_stock:"",fix_cost:"",Net_cost:"",Unit_cost:"",Total_cost:"",subtotal:"",product_id:"",detail_id:"",taxe:"",tax_percent:"",tax_method:"",product_variant_id:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(s.c)(["currentUser"])),methods:{Submit_Purchase:function(){var t=this;this.$refs.create_purchase.validate().then((function(e){e?t.Create_Purchase():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},submit_Update_Detail:function(){var t=this;this.$refs.Update_Detail_purchase.validate().then((function(e){e&&t.Update_Detail()}))},getValidationState:function(t){var e=t.dirty,a=t.validated,s=t.valid;return e||a?void 0===s?null:s:null},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},Get_Purchases_units:function(t){var e=this;axios.get("Get_sales_units?id="+t).then((function(t){var a=t.data;return e.units=a}))},Modal_Updat_Detail:function(t){this.detail={},this.detail.name=t.name,this.Get_Purchases_units(t.product_id),this.detail.detail_id=t.detail_id,this.detail.purchase_unit_id=t.purchase_unit_id,this.detail.Unit_cost=t.Unit_cost,this.detail.tax_method=t.tax_method,this.detail.fix_cost=t.fix_cost,this.detail.fix_stock=t.fix_stock,this.detail.stock=t.stock,this.detail.discount_Method=t.discount_Method,this.detail.discount=t.discount,this.detail.quantity=t.quantity,this.detail.tax_percent=t.tax_percent,this.$bvModal.show("form_Update_Detail")},Update_Detail:function(){for(var t=0;t<this.details.length;t++)if(this.details[t].detail_id===this.detail.detail_id){for(var e=0;e<this.units.length;e++)this.units[e].id==this.detail.purchase_unit_id&&("/"==this.units[e].operator?(this.details[t].stock=this.detail.fix_stock*this.units[e].operator_value,this.details[t].unitPurchase=this.units[e].ShortName):(this.details[t].stock=this.detail.fix_stock/this.units[e].operator_value,this.details[t].unitPurchase=this.units[e].ShortName));this.details[t].Unit_cost=this.detail.Unit_cost,this.details[t].tax_percent=this.detail.tax_percent,this.details[t].tax_method=this.detail.tax_method,this.details[t].discount_Method=this.detail.discount_Method,this.details[t].discount=this.detail.discount,this.details[t].purchase_unit_id=this.detail.purchase_unit_id,"2"==this.details[t].discount_Method?this.details[t].DiscountNet=this.details[t].discount:this.details[t].DiscountNet=parseFloat(this.details[t].Unit_cost*this.details[t].discount/100),"1"==this.details[t].tax_method?(this.details[t].Net_cost=parseFloat(this.details[t].Unit_cost-this.details[t].DiscountNet),this.details[t].taxe=parseFloat(this.details[t].tax_percent*(this.details[t].Unit_cost-this.details[t].DiscountNet)/100)):(this.details[t].Net_cost=parseFloat((this.details[t].Unit_cost-this.details[t].DiscountNet)/(this.details[t].tax_percent/100+1)),this.details[t].taxe=parseFloat(this.details[t].Unit_cost-this.details[t].Net_cost-this.details[t].DiscountNet)),this.$forceUpdate()}this.Calcul_Total(),this.$bvModal.hide("form_Update_Detail")},handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},search:function(){var t=this;if(this.timer&&(clearTimeout(this.timer),this.timer=null),this.search_input.length<1)return this.product_filter=[];""!=this.purchase.warehouse_id&&null!=this.purchase.warehouse_id?this.timer=setTimeout((function(){var e=t.products.filter((function(e){return e.code===t.search_input||e.barcode.includes(t.search_input)}));1===e.length?t.SearchProduct(e[0]):t.product_filter=t.products.filter((function(e){return e.name.toLowerCase().startsWith(t.search_input.toLowerCase())||e.code.toLowerCase().startsWith(t.search_input.toLowerCase())||e.barcode.toLowerCase().startsWith(t.search_input.toLowerCase())}))}),800):this.makeToast("warning",this.$t("SelectWarehouse"),this.$t("Warning"))},getResultValue:function(t){return t.code+" ("+t.name+")"},SearchProduct:function(t){this.product={},this.details.length>0&&this.details.some((function(e){return e.code===t.code}))?this.makeToast("warning",this.$t("AlreadyAdd"),this.$t("Warning")):(this.product.code=t.code,this.product.quantity=1,this.product.stock=t.qte_purchase,this.product.fix_stock=t.qte,this.product.product_variant_id=t.product_variant_id,this.Get_Product_Details(t.id)),this.search_input="",this.product_filter=[]},Selected_Warehouse:function(t){this.search_input="",this.product_filter=[],this.Get_Products_By_Warehouse(t)},Get_Products_By_Warehouse:function(t){var e=this;r.a.start(),r.a.set(.1),axios.get("Products/Warehouse/"+t+"?stock=0").then((function(t){e.products=t.data,r.a.done()})).catch((function(t){}))},add_product:function(){this.details.length>0?this.Last_Detail_id():0===this.details.length&&(this.product.detail_id=1),this.details.push(this.product)},Verified_Qty:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&(isNaN(t.quantity)&&(this.details[a].quantity=1),this.Calcul_Total(),this.$forceUpdate())},increment:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&this.formatNumber(this.details[a].quantity++,2);this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&t.quantity-1>0&&this.formatNumber(this.details[a].quantity--,2);this.$forceUpdate(),this.Calcul_Total()},formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var s=a[1]||"";if(s.length>e)return"".concat(a[0],".").concat(s.substr(0,e));for(;s.length<e;)s+="0";return"".concat(a[0],".").concat(s)},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_cost+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var a=parseFloat(this.total-this.purchase.discount);this.purchase.TaxNet=parseFloat(a*this.purchase.tax_rate/100),this.GrandTotal=parseFloat(a+this.purchase.TaxNet+this.purchase.shipping);var s=this.GrandTotal.toFixed(2);this.GrandTotal=parseFloat(s)},delete_Product_Detail:function(t){for(var e=0;e<this.details.length;e++)t===this.details[e].detail_id&&(this.details.splice(e,1),this.Calcul_Total())},keyup_OrderTax:function(){isNaN(this.purchase.tax_rate)?this.purchase.tax_rate=0:this.Calcul_Total()},keyup_Discount:function(){isNaN(this.purchase.discount)?this.purchase.discount=0:this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.purchase.shipping)?this.purchase.shipping=0:this.Calcul_Total()},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""!=this.details[e].quantity&&0!==this.details[e].quantity||(t+=1);return!(t>0)||(this.makeToast("warning",this.$t("AddQuantity"),this.$t("Warning")),!1)},Create_Purchase:function(){var t=this;this.verifiedForm()&&(this.SubmitProcessing=!0,r.a.start(),r.a.set(.1),axios.post("purchases",{date:this.purchase.date,supplier_id:this.purchase.supplier_id,warehouse_id:this.purchase.warehouse_id,statut:this.purchase.statut,notes:this.purchase.notes,tax_rate:this.purchase.tax_rate,TaxNet:this.purchase.TaxNet,discount:this.purchase.discount,shipping:this.purchase.shipping,GrandTotal:this.GrandTotal,details:this.details}).then((function(e){r.a.done(),t.makeToast("success",t.$t("Create.TitlePurchase"),t.$t("Success")),t.SubmitProcessing=!1,t.$router.push({name:"index_purchases"})})).catch((function(e){r.a.done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1})))},Last_Detail_id:function(){this.product.detail_id=0;var t=this.details.length;this.product.detail_id=this.details[t-1].detail_id+1},Get_Product_Details:function(t){var e=this;axios.get("Products/"+t).then((function(t){e.product.discount=0,e.product.DiscountNet=0,e.product.discount_Method="2",e.product.product_id=t.data.id,e.product.name=t.data.name,e.product.Net_cost=t.data.Net_cost,e.product.Unit_cost=t.data.Unit_cost,e.product.taxe=t.data.tax_cost,e.product.tax_method=t.data.tax_method,e.product.tax_percent=t.data.tax_percent,e.product.unitPurchase=t.data.unitPurchase,e.product.fix_cost=t.data.fix_cost,e.product.purchase_unit_id=t.data.purchase_unit_id,e.add_product(),e.Calcul_Total()}))},GetElements:function(){var t=this;axios.get("purchases/create").then((function(e){t.suppliers=e.data.suppliers,t.warehouses=e.data.warehouses,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}},d=a(2),l=Object(d.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("AddPurchase"),folder:t.$t("ListPurchases")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("validation-observer",{ref:"create_purchase"},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Purchase.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("b-card",[a("b-row",[a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("date")}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"date-feedback",type:"date"},model:{value:t.purchase.date,callback:function(e){t.$set(t.purchase,"date",e)},expression:"purchase.date"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1215936152)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Supplier",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("Supplier")}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Supplier"),options:t.suppliers.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.purchase.supplier_id,callback:function(e){t.$set(t.purchase,"supplier_id",e)},expression:"purchase.supplier_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,2176043484)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("warehouse")}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),disabled:t.details.length>0,reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Warehouse},model:{value:t.purchase.warehouse_id,callback:function(e){t.$set(t.purchase,"warehouse_id",e)},expression:"purchase.warehouse_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,824177723)})],1),t._v(" "),a("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[a("h6",[t._v(t._s(t.$t("ProductName")))]),t._v(" "),a("div",{staticClass:"autocomplete",attrs:{id:"autocomplete"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_input,expression:"search_input"}],staticClass:"autocomplete-input",attrs:{placeholder:t.$t("Scan_Search_Product_by_Code_Name")},domProps:{value:t.search_input},on:{keyup:function(e){return t.search()},focus:t.handleFocus,blur:t.handleBlur,input:function(e){e.target.composing||(t.search_input=e.target.value)}}}),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},t._l(t.product_filter,(function(e){return a("li",{staticClass:"autocomplete-result",on:{mousedown:function(a){return t.SearchProduct(e)}}},[t._v(t._s(t.getResultValue(e)))])})),0)])]),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("h5",[t._v(t._s(t.$t("order_products"))+" *")]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",{staticClass:"bg-gray-300"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Cost")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CurrentStock")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("i",{staticClass:"fa fa-trash"})])])]),t._v(" "),a("tbody",[t.details.length<=0?a("tr",[a("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(e){return a("tr",[a("td",[t._v(t._s(e.detail_id))]),t._v(" "),a("td",[a("span",[t._v(t._s(e.code))]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"badge badge-success"},[t._v(t._s(e.name))]),t._v(" "),a("i",{staticClass:"i-Edit",on:{click:function(a){return t.Modal_Updat_Detail(e)}}})]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.Net_cost,3)))]),t._v(" "),a("td",[a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(e.stock)+" "+t._s(e.unitPurchase))])]),t._v(" "),a("td",[a("div",{staticClass:"quantity"},[a("b-input-group",[a("b-input-group-prepend",[a("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.decrement(e,e.detail_id)}}},[t._v("-")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0},domProps:{value:e.quantity},on:{keyup:function(a){return t.Verified_Qty(e,e.detail_id)},input:function(a){a.target.composing||t.$set(e,"quantity",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("b-input-group-append",[a("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.increment(e,e.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.DiscountNet*e.quantity,2)))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.taxe*e.quantity,2)))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(e.subtotal.toFixed(2)))]),t._v(" "),a("td",[a("a",{staticClass:"btn btn-icon btn-sm",attrs:{title:"Delete"},on:{click:function(a){return t.delete_Product_Detail(e.detail_id)}}},[a("i",{staticClass:"i-Close-Window text-25 text-danger"})])])])}))],2)])])]),t._v(" "),a("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[a("table",{staticClass:"table table-striped table-sm"},[a("tbody",[a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),a("td",[a("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.purchase.tax_rate,2))+" %)")])])]),t._v(" "),a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase.discount.toFixed(2)))])]),t._v(" "),a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase.shipping.toFixed(2)))])]),t._v(" "),a("tr",[a("td",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),a("td",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toFixed(2)))])])])])])]),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("OrderTax")}},[a("b-input-group",{attrs:{append:"%"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.purchase.tax_rate,callback:function(e){t.$set(t.purchase,"tax_rate",t._n(e))},expression:"purchase.tax_rate"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2647717874)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Discount")}},[a("b-input-group",{attrs:{append:t.currentUser.currency}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.purchase.discount,callback:function(e){t.$set(t.purchase,"discount",t._n(e))},expression:"purchase.discount"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,98387733)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Shipping")}},[a("b-input-group",{attrs:{append:t.currentUser.currency}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.purchase.shipping,callback:function(e){t.$set(t.purchase,"shipping",t._n(e))},expression:"purchase.shipping"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,3379867482)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("Status")}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"received",value:"received"},{label:"pending",value:"pending"},{label:"ordered",value:"ordered"}]},model:{value:t.purchase.statut,callback:function(e){t.$set(t.purchase,"statut",e)},expression:"purchase.statut"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,3307671188)})],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:t.$t("Note")}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.purchase.notes,expression:"purchase.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.purchase.notes},on:{input:function(e){e.target.composing||t.$set(t.purchase,"notes",e.target.value)}}})])],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",[a("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Purchase}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("validation-observer",{ref:"Update_Detail_purchase"},[a("b-modal",{attrs:{"hide-footer":"",size:"md",id:"form_Update_Detail",title:t.detail.name}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit_Update_Detail.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Product Cost",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("ProductCost"),id:"cost-input"}},[a("b-form-input",{attrs:{label:"Product Cost",state:t.getValidationState(e),"aria-describedby":"cost-feedback"},model:{value:t.detail.Unit_cost,callback:function(e){t.$set(t.detail,"Unit_cost",t._n(e))},expression:"detail.Unit_cost"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"cost-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Tax Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("TaxMethod")}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},model:{value:t.detail.tax_method,callback:function(e){t.$set(t.detail,"tax_method",e)},expression:"detail.tax_method"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Order Tax",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("OrderTax")}},[a("b-input-group",{attrs:{append:"%"}},[a("b-form-input",{attrs:{label:"Order Tax",state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback"},model:{value:t.detail.tax_percent,callback:function(e){t.$set(t.detail,"tax_percent",t._n(e))},expression:"detail.tax_percent"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Discount Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("Discount_Method")}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),state:!i[0]&&(!!s||null),options:[{label:"Percent %",value:"1"},{label:"Fixed",value:"2"}]},model:{value:t.detail.discount_Method,callback:function(e){t.$set(t.detail,"discount_Method",e)},expression:"detail.discount_Method"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Discount Rate",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Discount")}},[a("b-form-input",{attrs:{label:"Discount",state:t.getValidationState(e),"aria-describedby":"Discount-feedback"},model:{value:t.detail.discount,callback:function(e){t.$set(t.detail,"discount",t._n(e))},expression:"detail.discount"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Unit Purchase",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("UnitPurchase")}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),placeholder:t.$t("Choose_Unit_Purchase"),reduce:function(t){return t.value},options:t.units.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.detail.purchase_unit_id,callback:function(e){t.$set(t.detail,"purchase_unit_id",e)},expression:"detail.purchase_unit_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}])})],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",[a("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null);e.default=l.exports}}]);