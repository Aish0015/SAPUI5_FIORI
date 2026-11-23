sap.ui.define([
   
], () => {
   //   "use strict";

    return {

      formatCategoryId:function(CategoryID){
      var categoryDesc = " ";
       if(CategoryID === 1){
            categoryDesc = "(Premium)";
         }
         if(CategoryID === 2){
            categoryDesc = "(Industrial)";
         }
         if(CategoryID === 3){
            categoryDesc = "(Standard)";
         }
         if(CategoryID === 4){
            categoryDesc = "(Utility)";
         }
         if(CategoryID === 5){
            categoryDesc = "(Consumable)";
         }
          if(CategoryID > 5){
            categoryDesc = "(Miscellaneous)";
         }
          return CategoryID + categoryDesc;
        },
        formatDiscontinued : function(Discontinued){
         if(Discontinued === false){
            return "Success"
         }else{
            return "Error"
         }
        }
      }
    }

);