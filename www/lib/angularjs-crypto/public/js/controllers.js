'use strict';

function DecodeGetController($scope, Data) {
    Data.queryNoCrypt({}, function(response) {
        $scope.received=response;
        $scope.receivedstr=JSON.stringify($scope.received, null, 4);
    });
    Data.get({}, function(response){
    	$scope.data=response;
        $scope.datastr=JSON.stringify($scope.data, null, 4);
    });
}

function CustomJsonEncodeController($scope, Data) {
    $scope.sendJson = function() {
        $scope.dataJson = JSON.parse($scope.data);
        $scope.datastr=JSON.stringify($scope.dataJson, null, 4);
        Data.save($scope.dataJson, function(response){
            $scope.send = response;
            $scope.sendstr=JSON.stringify($scope.send, null, 4);
        })
    };
}


function FullJsonEncodeController($scope, Data) {
    $scope.sendJson = function() {
        $scope.dataJson = JSON.parse($scope.data);
        $scope.datastr=JSON.stringify($scope.dataJson, null, 4);
        Data.saveFullJson($scope.dataJson, function(response){
            $scope.send = response;
            $scope.sendstr=JSON.stringify($scope.send, null, 4);
        })
    };
}


function EncodeQueryGetController($scope, Data) {
    $scope.plainQueryParam={name_enc:'COMMERZBANK AG'}
    Data.queryNoDecrypt({name_enc:'COMMERZBANK AG'}, function(response) {
	//store sended query param in scope
	   $scope.query=response.query;
	   $scope.data = response;
	   $scope.datastr=JSON.stringify($scope.data, null, 4);
    });
}

function EncodeFullQueryGetController($scope, Data) {
    $scope.plainQueryParam={name:'COMMERZBANK AG', value:12345, id:12345}
    Data.queryFullCrypt({name:'COMMERZBANK AG', value:12345, id:12345}, function(response) {
	$scope.query=response.query;
    	$scope.data = response;
	$scope.datastr=JSON.stringify($scope.data, null, 4);
    });
}

function EncodeBodyPostController($scope, Data) {
    $scope.data = {
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    };
    $scope.datastr=JSON.stringify($scope.data, null, 4);
    Data.saveEnCrypt($scope.data, function(response){
        $scope.send = response[0];
    });
}

function DecodeBodyPostController($scope, Data) {
    $scope.data = {
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    };
    $scope.datastr=JSON.stringify($scope.data, null, 4);
    Data.saveDeCrypt($scope.data, function(response){
        $scope.received = response;
        $scope.receivedstr = JSON.stringify(response, null, 4);;
    });
}

function EmptyController($scope, Data) {
    $scope.received = Data.save();
    $scope.data = Data.get();
}

function EncodePostController($scope, Data) {
    $scope.data = {
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    };
    $scope.datastr=JSON.stringify($scope.data, null, 4);
    $scope.send = {
        items: [
        {name_enc: "COMMERZBANK AG", value_enc: "1504.75", plain: "Hallo"}
        ],
        count: 1
    };
    Data.save($scope.send , function(response) {
    	$scope.sendstr=JSON.stringify($scope.send, null, 4);
    });
}
