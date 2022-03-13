/* <div class="left-column">
      <img id="productImg" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="">
    </div>
    <div class="right-column">
      <div class="product-description">
        <h1 id="name">Men Navy Blue Solid Sweatshirt</h1>
        <h4 id="brand">United Colors of Benetton</h4>
        <h3>Price: Rs <span id="price">2599</span></h3>
        <div class="description">
          <h3>Description</h3>
          <p id="description">Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem</p>
        </div>
        <div class="product-preview">
          <h3>Product Preview</h3>
          <div class="previewImg">
              <img id="img0" class="active" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="">
              <img id="img1" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg" alt="">
              <img id="img2" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg" alt="">
              <img id="img3" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg" alt="">
              <img id="img4" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg" alt="">
              <img id="img5" src="undefined" alt="">
          </div>
        </div>
      </div>
        <div class="btn">
          <button id="add-to-cart">Add to Cart</button>
        </div>
    </div> */
$(document).ready(function() {
        console.log("DOM ready!!")
        var currentObj=null;
        var ProductSection=$("#product");

        function createProduct(pobj){
        var LeftColumn=$("<div>").addClass("left-column")
        
        var LeftImage=$("<img>").attr({
            id:"productImg",
            src:pobj.preview
        })
        
        
        LeftColumn.append(LeftImage)
        ProductSection.append(LeftColumn)
        var RightColumn=$("<div>").addClass("right-column")
        
        var ProductDescription=$("<div>").addClass("product-description")
        
        RightColumn.append(ProductDescription)
        var Name=$("<h1>").attr("id","name")
       
        Name.text(pobj.name);
        ProductDescription.append(Name);
        var Brand=$("<h4>").attr("id","brand")
       
        Brand.text(pobj.brand)
        ProductDescription.append(Brand);
        var Price=$("<h3>") 
        Price.text("Prise: Rs ")
        ProductDescription.append(Price);
        var cost=$('<span>').attr("id","price")
        
        cost.text(pobj.price)
        Price.append(cost)
        var DescriptionWrapper=$("<div>").addClass("description")
        
        var DescriptionTitle=$("<h3>");
        DescriptionTitle.text("Description")
        DescriptionWrapper.append(DescriptionTitle);
        var DescriptionText=$("<p>").attr("id","description")
        
        DescriptionText.text(pobj.description)
        DescriptionWrapper.append(DescriptionText)
        ProductDescription.append(DescriptionWrapper);
        var ProductPreviw=$("<div>").addClass("product-previw")
        
        var PreviewTitle=$("<h3>");
        PreviewTitle.text("Product Preview")
        ProductPreviw.append(PreviewTitle);
        var PreviewImage=$("<div>").addClass("previewImg")
       
        ProductPreviw.append(PreviewImage);
        
     
        
        function renderProductImages(url, pos) {
            // <img class="preview-images active" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" />
    
            var image = $("<img>").attr("src", url).addClass("preview-images");
            if(pos === 0) {
                image.addClass("active");
            }
    
            image.click(function() {
                $(".preview-images").removeClass("active");
                image.addClass("active");
                $("#productImg").attr("src", url)
            })
    
            PreviewImage.append(image);
        }
       
        for(var i=0; i<pobj.photos.length; i++) {
            renderProductImages(pobj.photos[i], i);
        }
        ProductDescription.append(ProductPreviw)
        var ButtonWrapper=$("<div>").addClass("btn")
        var button=$("<button>").attr("id","add-to-cart")
        
        button.text("ADD To Cart")

        ButtonWrapper.append(button)
        RightColumn.append(ButtonWrapper) 
        ProductSection.append(RightColumn)     

    }
    var urlName=location.href.split('=')[1];
    
    console.log("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+urlName)
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+urlName, function(response) {
        var productData = response;
        createProduct(productData);
        var currentObj=productData;
        console.log(currentObj.id) 
       
        var buttons=$("#add-to-cart")
        buttons.click(function(){       
        buttons.addClass("bigger")
        setTimeout(function(){
            buttons.removeClass("bigger")
        },200)       
        
        var checkOutList = window.localStorage.getItem('checkOut-list');
        checkOutList = checkOutList === null || checkOutList === '' ? [] : checkOutList;
        checkOutList = checkOutList.length > 0 ? JSON.parse(checkOutList) : [];
        console.log(checkOutList);


        var foundAtPos = -1;
       
        for(var i=0; i < checkOutList.length; i++) {
            console.log(checkOutList[i].id);
            if(parseInt(checkOutList[i].id)== parseInt(currentObj.id)) {
                foundAtPos = i;
            }
        }

        if(foundAtPos > -1) {
            checkOutList[foundAtPos].count = checkOutList[foundAtPos].count + 1;
            console.log(checkOutList[foundAtPos].count);
            window.localStorage.setItem('checkOut-list', JSON.stringify(checkOutList));
        } else {
            currentObj.count = 1;
            checkOutList.push(currentObj);
            console.log(checkOutList);
            window.localStorage.setItem('checkOut-list', JSON.stringify(checkOutList));
        }

        var totalCount = 0;
        for(var i=0; i<checkOutList.length; i++) {
            totalCount = totalCount + checkOutList[i].count;
        }
    
        $('#cart-count').text(totalCount);

    

    })


    })

});