
app_jogo_da_velha.controller('JogoDaVelhaCtrl', function ($scope) {

    $scope.linhas = 3;
    $scope.colunas = 3;
    $scope.jogadaDoPrimeiro = true;
    $scope.JogadorVencedor = 0;
    $scope.JogadorVenceu = false;


    $scope.iniciarJogo = function(linha, coluna){
        $scope.jogadaDoPrimeiro = true;
        $scope.JogadorVencedor = 0;
        $scope.JogadorVenceu = false;

        var matriz = [];
        for (var i = 0; i < linha; i++) {
            matriz[i] = [];
            for (var j = 0; j < coluna; j++) {
                matriz[i][j] = 0;
            };
        };
        return matriz;
    };

    $scope.jogo = $scope.iniciarJogo($scope.linhas, $scope.colunas);
    $scope.getArray = function(num) {
        var _Array = [];
        for (var i = 0; i < num; i++) 
            _Array[i] = i;
        return _Array;
    };

    $scope.jogada = function(lin,col){
        
        if($scope.jogo[lin][col] === 0){
            $scope.jogadaDoPrimeiro = !$scope.jogadaDoPrimeiro;
            if (!$scope.jogadaDoPrimeiro) {
                $scope.jogo[lin][col] = 1
                $scope.verificarSeExisteGanhador();
                $scope.MostrarVencedor($scope.JogadorVencedor);
                return "bolinha"
            }
            else {
                $scope.jogo[lin][col] = 2;
                $scope.verificarSeExisteGanhador();
                $scope.MostrarVencedor($scope.JogadorVencedor);
                return "xis";
            }
        }else{
            if ($scope.jogo[lin][col] ===1) return "bolinha"
            else return "xis";
        }
    };

    $scope.verificarSeExisteGanhador = function(){
        var Jogador = 1;
        verifica: {
            for (var i = 0; i < 2; i++) {
                if($scope.jogo[0][i] === Jogador
                    && $scope.jogo[1][i] === Jogador
                    && $scope.jogo[2][i] === Jogador ){
                        $scope.JogadorVencedor = Jogador;
                        break verifica;
                    }

                else if($scope.jogo[i][0] === Jogador
                    && $scope.jogo[i][1] === Jogador
                    && $scope.jogo[i][2] === Jogador ){
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
                Jogador = 2;
            };
        }
    }
    $scope.MostrarVencedor = function(Vencedor){
        if(Vencedor===1 || Vencedor===2){
            $scope.JogadorVenceu = true;
        }
    }

    $scope.LimparClass = function(){
        for (var i = 0; i < $scope.linhas; i++) {
            for (var j = 0; i < $scope.colunas; i++) {

            };
        };
    }
});