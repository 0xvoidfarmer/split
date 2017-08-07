pragma solidity ^0.4.5;
pragma solidity ^0.4.5;

contract Split {
	address public bob;
	address public carol;

	function Split(address _bob, address _carol){
		bob = _bob;
		carol = _carol;
	}


function splitMoney () public 	payable returns (bool success)
{
	if(msg.value == 0 ) throw;
	if(msg.sender == bob || msg.sender == carol) throw;
	
	var spiltAmount = (msg.value / 2);
	bob.send(spiltAmount);
	carol.send(spiltAmount);

	return true;
}

function showBalance(address addr) returns (uint){
    return addr.balance;
}

}