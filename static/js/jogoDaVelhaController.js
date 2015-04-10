
app_jogo_da_velha.controller('JogoDaVelhaCtrl', function ($scope) {

    $scope.linhas = 3;
    $scope.colunas = 3;
    $scope.jogadaDoPrimeiro = true;
    $scope.JogadorVencedor = 0;
    $scope.JogadorVenceu = false;
    $scope.DeuVelha = false;
    $scope.jogo;

    $scope.iniciarJogo = function(){
        $scope.jogadaDoPrimeiro = true;
        $scope.JogadorVencedor = 0;
        $scope.JogadorVenceu = false;
        $scope.DeuVelha = false;
        $scope.jogo = [];
        for (var i = 0; i < $scope.linhas; i++) {
            $scope.jogo[i] = [];
            for (var j = 0; j < $scope.colunas; j++) {
                $scope.jogo[i][j] = '';
            };
        };
    };

    $scope.iniciarJogo();
    
    $scope.getArray = function(num) {
        var _Array = [];
        for (var i = 0; i < num; i++) 
            _Array[i] = i;
        return _Array;
    };

    $scope.jogada = function(lin,col){
        
        if($scope.jogo[lin][col] === ''){
            $scope.jogadaDoPrimeiro = !$scope.jogadaDoPrimeiro;
            if (!$scope.jogadaDoPrimeiro) 
                $scope.jogo[lin][col] = "bolinha";
            else 
                $scope.jogo[lin][col] = "xis";
            $scope.verificarSeExisteGanhador();
            $scope.MostrarVencedor($scope.JogadorVencedor);
            if ($scope.JogadorVencedor === 0) $scope.verificaSeDeuVelha();
        }
    };

    $scope.verificarSeExisteGanhador = function(){
        var Jogador = "bolinha";
        verifica: {
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    if($scope.jogo[0][j] === Jogador
                        && $scope.jogo[1][j] === Jogador
                        && $scope.jogo[2][j] === Jogador ){
                            $scope.JogadorVencedor = Jogador;
                            break verifica;
                        }

                    else if($scope.jogo[j][0] === Jogador
                        && $scope.jogo[j][1] === Jogador
                        && $scope.jogo[j][2] === Jogador ){
                            $scope.JogadorVencedor = Jogador;
                            break verifica;
                        }

                    else if($scope.jogo[0][0] === Jogador
                        && $scope.jogo[1][1] === Jogador
                        && $scope.jogo[2][2] === Jogador ){
                            $scope.JogadorVencedor = Jogador;
                            break verifica;
                        }
                    else if($scope.jogo[0][2] === Jogador
                        && $scope.jogo[1][1] === Jogador
                        && $scope.jogo[2][0] === Jogador ){
                            $scope.JogadorVencedor = Jogador;
                            break verifica;
                        }
                }
                Jogador = "xis";
            };
        }
    }

    $scope.verificaSeDeuVelha = function(){
        var deuVelha = true;
        for (var i = 0; i < $scope.linhas; i++) {
            for (var j = 0; j <  $scope.colunas; j++) {
                if($scope.jogo[i][j] === '') deuVelha = false;
            };
        }; 
        if(deuVelha) $scope.DeuVelha = deuVelha

    };

    $scope.MostrarVencedor = function(Vencedor){
        if (Vencedor !== 0){
            if(Vencedor === "bolinha"){
                $scope.JogadorVencedor = 1
            }
            else if(Vencedor === "xis"){
                $scope.JogadorVencedor = 2
            }
            $scope.JogadorVenceu = true;
        }
    }
});