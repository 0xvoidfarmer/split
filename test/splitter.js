var Split = artifacts.require("./Split.sol");

contract('Split', function( first,second){
	it("should split money correctly",function(){
		var meta;

		// Get initial balances of Alice Bob and carol
		var alice 	= accounts[0];
		var bob	= accounts[1];
		var carol 	= accounts[2];

		var amount = accounts[0].balance.tounmber();

		var alice_starting_balance;
		var bob_starting_balance;
		var carol_starting_balance;
		var alice_ending_balance;
		var bob_ending_balance;
		var carol_ending_balance;



		

		return Split.deployed().then(function(instance){
				meta = instance;
				return meta.showBalance.call(alice);
		}).then(function(balance){
			alice_starting_balance = balance.toNumber();
			return meta.showBalance.call(bob);
		}).then(function(balance){
			bob_starting_balance = balance.toNumber();
			return meta.showBalance.call(carol);
		}).then(function(balance){
			carol_starting_balance = balance.toNumber();
			return meta.splitMoney();
		}).then(function(){
			return meta.showBalance.call(alice);
		}).then(function(balance){
			alice_ending_balance = balance.toNumber();
			return meta.showBalance.call(bob);
		}).then(function(balance){
			bob_ending_balance = balance.toNumber();
			return meta.showBalance.call(carol);
		}).then(function(balance){
			carol_ending_balance = balance.toNumber();
		});

assert.equal(alice_starting_balance, alice_starting_balance - amount ,"Amount wasn't correctly taken from the sender");

	});
});
