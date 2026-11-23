sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "com/northwind/project1/model/formatter",
    "sap/m/MessageBox",
    "sap/ui/model/Filter"
  ], (Controller, formatter, MessageBox, Filter) => {
    "use strict";

    return Controller.extend("com.northwind.project1.controller.View1", {
      onInit: function () { },
      onPressGo: function () {
        var aFiltres = [];
        var productId = this.getView().byId("oIpProductId").getValue();
        if (productId !== "") {
          aFiltres.push(new Filter("ProductID", "EQ", productId));
        }
        this.byId("idProductsTable").getBinding("items").filter(aFiltres);
      }
    });
  },
);
