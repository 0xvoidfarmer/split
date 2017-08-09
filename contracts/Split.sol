pragma solidity ^0.4.5;

contract Split {
	address public bob;
	address public carol;

function Split(address _bob, address _carol){
	bob = _bob;
	carol = _carol;
}


function splitMoney () 
	public 	
	payable 
	returns (bool success)
	{
		if(msg.value == 0 ) throw;
		if(msg.sender == bob || msg.sender == carol) throw;
		//Require bob address not empty
		//require carol address not empty

		//TODO: if (msg.value % 2 != 0) Do odd value split
		var spiltAmount = (msg.value / 2);
		if(!bob.send(spiltAmount)) throw; 
		if(!carol.send(spiltAmount)) throw;

		return true;
	}

function showBalance(address addr) 
	returns (uint)
	{
	    return addr.balance;
	}

function () {}

//TODO: kill switch
}
