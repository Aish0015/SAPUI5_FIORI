sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "com/northwind/project1/model/formatter",
    "sap/m/MessageBox",
  ],
  (Controller, formatter, MessageBox) => {
    "use strict";

    return Controller.extend("com.northwind.project1.controller.View1", {
      onInit: function () {},
      onPressrow:function(oEvent){
       console.log(oEvent);
       var productId = oEvent.getSource().getBindingContext("oModel").getObject().ProductID;
      },
      onGetProductId:function(){
      // var productId = this.byId("idProductsTable").getSelectedItem().getBindingContext("oModel").getObject().ProductID;
      // console.log(productId);
      var aProducts = this.byId("idProductsTable").getSelectedItems();
       for(var i=0;i<aProducts.length;i++){
         MessageBox.success( String(aProducts[i].getBindingContext("oModel").getObject().ProductID ));
        }
      }
     
      
    });
  },
);
