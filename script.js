  function mobileMenu()
        {
            var x=document.getElementById('myTopNav'); //Если  элементе id = "myTopNav" индентична "topnav", то  добавить класс "responsive"
            if (x.className === "topnav")
                x.className +=" responsive";
            else x.className ="topnav";
        }
