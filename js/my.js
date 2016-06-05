var cell = new Array(9);
for (i=0; i<9; i++) cell[i] = 0;

x = new Image(64,64);
x.src = "./img/x.png";
o = new Image(64,64);
o.src = "./img/0.png";
e = new Image(64,64);
e.src = "./img/bacgroundTd.jpg";

 var xo = angular.module("xo", []);

xo.controller("xoCtrl", function($scope){
        $scope.message = "Alex Angular";

        $scope.clickTd = function(value){
              if (cell[value] == 0) {
                Cross(value);
                cell[value] = 1;
                if (CheckVictory() == true) {
                  $scope.message ="Ты выиграл. Поздравляю.";
                }
                else {
                  CheckNobody();
                  CompTurn();
                  CheckNobody();
                }
              }
        }
        $scope.clickButton = function(){
            var ta = document.getElementsByTagName("td");
            for(var i=0; i<ta.length; i++) ta[i].classList.remove("victoryTr");
            GameOver();
            $scope.message ="Поехали!";
        }
        $scope.firstPge ="firstPge"
        $scope.clickStart = function(){
             $scope.firstPge ="firstPgeNone";
        }
    function Cross(value) {   
        switch(value) {
            case 0:  
                document.pole0.src = x.src;
                break;
            case 1: 
                document.pole1.src = x.src;
                break;
            case 2:  
                document.pole2.src = x.src;
                break;
            case 3:  
                document.pole3.src = x.src;
                break;
            case 4:  
                document.pole4.src = x.src;
                break;
            case 5:  
                document.pole5.src = x.src;
                break;
            case 6:  
                document.pole6.src = x.src;
                break;
            case 7: 
                document.pole7.src = x.src;
                break;
            case 8:  
                document.pole8.src = x.src;
                break;
        }
    }
    function Zero(value) {
       switch(value) {
            case 0:  
                document.pole0.src = o.src;
                break;
            case 1: 
                document.pole1.src = o.src;
                break;
            case 2:  
                document.pole2.src = o.src;
                break;
            case 3:  
                document.pole3.src = o.src;
                break;
            case 4:  
                document.pole4.src = o.src;
                break;
            case 5:  
                document.pole5.src = o.src;
                break;
            case 6:  
                document.pole6.src = o.src;
                break;
            case 7: 
                document.pole7.src = o.src;
                break;
            case 8:  
                document.pole8.src = o.src;
                break;
        }
    }

    function CheckVictory() {
      if (cell[0] == cell[1] && cell[1] == cell[2] && cell[2] > 0)  {
          document.pole0.parentNode.classList.add("victoryTr") ;
          document.pole1.parentNode.classList.add("victoryTr") ;
          document.pole2.parentNode.classList.add("victoryTr") ;
          return true; 
      }
      if (cell[3] == cell[4] && cell[4] == cell[5] && cell[5] > 0) {
          document.pole3.parentNode.classList.add("victoryTr") ;
          document.pole4.parentNode.classList.add("victoryTr") ;
          document.pole5.parentNode.classList.add("victoryTr") ;
          return true; 
      }
      if (cell[6] == cell[7] && cell[7] == cell[8] && cell[8] > 0) {
          document.pole6.parentNode.classList.add("victoryTr") ;
          document.pole7.parentNode.classList.add("victoryTr") ;
          document.pole8.parentNode.classList.add("victoryTr") ;
          return true; 
      }
      if (cell[6] == cell[3] && cell[3] == cell[0] && cell[0] > 0) {
          document.pole6.parentNode.classList.add("victoryTr") ;
          document.pole3.parentNode.classList.add("victoryTr") ;
          document.pole8.parentNode.classList.add("victoryTr") ;
          return true; 
      }
      if (cell[7] == cell[4] && cell[4] == cell[1] && cell[1] > 0) {
          document.pole7.parentNode.classList.add("victoryTr") ;
          document.pole4.parentNode.classList.add("victoryTr") ;
          document.pole1.parentNode.classList.add("victoryTr") ;
          return true; 
      }
      if (cell[8] == cell[5] && cell[5] == cell[2] && cell[2] > 0) {
          document.pole8.parentNode.classList.add("victoryTr") ;
          document.pole5.parentNode.classList.add("victoryTr") ;
          document.pole2.parentNode.classList.add("victoryTr") ;
          return true; 
      }
      if (cell[6] == cell[4] && cell[4] == cell[2] && cell[2] > 0) {
          document.pole6.parentNode.classList.add("victoryTr") ;
          document.pole4.parentNode.classList.add("victoryTr") ;
          document.pole2.parentNode.classList.add("victoryTr") ;
          return true; 
      }
      if (cell[0] == cell[4] && cell[4] == cell[8] && cell[8] > 0) {
          document.pole0.parentNode.classList.add("victoryTr") ;
          document.pole4.parentNode.classList.add("victoryTr") ;
          document.pole8.parentNode.classList.add("victoryTr") ;
          return true; 
      }
    }

    function CompTurn() {
      for (i=0; i<9; i++) if (cell[i] == 0) PutHere = i;
      for (i=0; i<3; i++) {
      if (cell[0] == cell[1] && cell[2] == 0 && cell[0] == i) PutHere = 2;
      if (cell[0] == cell[2] && cell[1] == 0 && cell[0] == i) PutHere = 1;
      if (cell[1] == cell[2] && cell[0] == 0 && cell[2] == i) PutHere = 0;
      if (cell[3] == cell[4] && cell[5] == 0 && cell[3] == i) PutHere = 5;
      if (cell[3] == cell[5] && cell[4] == 0 && cell[3] == i) PutHere = 4;
      if (cell[4] == cell[5] && cell[3] == 0 && cell[5] == i) PutHere = 3;
      if (cell[6] == cell[7] && cell[8] == 0 && cell[6] == i) PutHere = 8;
      if (cell[6] == cell[8] && cell[7] == 0 && cell[6] == i) PutHere = 7;
      if (cell[7] == cell[8] && cell[6] == 0 && cell[8] == i) PutHere = 6;

      if (cell[6] == cell[3] && cell[0] == 0 && cell[6] == i) PutHere = 0;
      if (cell[6] == cell[0] && cell[3] == 0 && cell[6] == i) PutHere = 3;
      if (cell[3] == cell[0] && cell[6] == 0 && cell[3] == i) PutHere = 6;
      if (cell[7] == cell[4] && cell[1] == 0 && cell[7] == i) PutHere = 1;
      if (cell[7] == cell[1] && cell[4] == 0 && cell[7] == i) PutHere = 4;
      if (cell[4] == cell[1] && cell[7] == 0 && cell[4] == i) PutHere = 7;
      if (cell[8] == cell[5] && cell[2] == 0 && cell[8] == i) PutHere = 2;
      if (cell[8] == cell[2] && cell[5] == 0 && cell[8] == i) PutHere = 5;
      if (cell[5] == cell[2] && cell[8] == 0 && cell[5] == i) PutHere = 8;

      if (cell[6] == cell[4] && cell[2] == 0 && cell[6] == i) PutHere = 2;
      if (cell[6] == cell[2] && cell[4] == 0 && cell[6] == i) PutHere = 4;
      if (cell[4] == cell[2] && cell[6] == 0 && cell[4] == i) PutHere = 6;
      if (cell[0] == cell[4] && cell[8] == 0 && cell[0] == i) PutHere = 8;
      if (cell[0] == cell[8] && cell[4] == 0 && cell[0] == i) PutHere = 4;
      if (cell[4] == cell[8] && cell[0] == 0 && cell[4] == i) PutHere = 0;
      }
      Zero(PutHere);
      cell[PutHere] = 2;
      if (CheckVictory() == true) {
        $scope.message ="Выиграл JavaScript =).";
       
      }
    }

    function GameOver() {
      for (i=0; i<9; i++) cell[i] = 0;
      document.pole0.src = e.src;
      document.pole1.src = e.src;
      document.pole2.src = e.src;
      document.pole3.src = e.src;
      document.pole4.src = e.src;
      document.pole5.src = e.src;
      document.pole6.src = e.src;
      document.pole7.src = e.src;
      document.pole8.src = e.src;
    }


    function CheckNobody() {
      no = false;
      for (i=0; i<9; i++) if (cell[i] == 0) no = true;
      if (no == false) {
      $scope.message ="Ничья.";
      }
    }

 
    
});