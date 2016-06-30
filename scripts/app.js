(function() {
  'use strict';
  var app = {
    games_list: document.querySelector('.games_list'),
    refs_list: document.querySelector('.refs_list'),
    team1Dialog: document.querySelector('.team1-dialog-container'),
    team2Dialog: document.querySelector('.team2-dialog-container'),

  };

  app.toggleTeam1Dialog = function(visible) {
    if (visible) {
      app.team1Dialog.classList.add('dialog-container--visible');
    } else {
      app.team1Dialog.classList.remove('dialog-container--visible');
    }
  };

  app.toggleTeam2Dialog = function(visible) {
    if (visible) {
      app.team2Dialog.classList.add('dialog-container--visible');
    } else {
      app.team2Dialog.classList.remove('dialog-container--visible');
    }
  };

  document.getElementById('scores1').addEventListener('click', function(e) {
  	document.getElementById('parent_field1').value = e.toElement.id
    app.toggleTeam1Dialog(true);
  });
  document.getElementById('scores2').addEventListener('click', function(e) {
  	document.getElementById('parent_field2').value = e.toElement.id
    app.toggleTeam2Dialog(true);
  });
  document.getElementById('fouls1').addEventListener('click', function(e) {
  	document.getElementById('parent_field1').value = e.toElement.id
    app.toggleTeam1Dialog(true);
  });
  document.getElementById('fouls2').addEventListener('click', function(e) {
  	document.getElementById('parent_field2').value = e.toElement.id
    app.toggleTeam2Dialog(true);
  });
  document.getElementById('kicks1').addEventListener('click', function(e) {
  	document.getElementById('parent_field1').value = e.toElement.id
    app.toggleTeam1Dialog(true);
  });
  document.getElementById('kicks2').addEventListener('click', function(e) {
  	document.getElementById('parent_field2').value = e.toElement.id
    app.toggleTeam2Dialog(true);
  });
  document.getElementById('pens1').addEventListener('click', function(e) {
  	document.getElementById('parent_field1').value = e.toElement.id
    app.toggleTeam1Dialog(true);
  });
  document.getElementById('pens2').addEventListener('click', function(e) {
  	document.getElementById('parent_field2').value = e.toElement.id
    app.toggleTeam2Dialog(true);
  });
  document.getElementById('offs1').addEventListener('click', function(e) {
  	document.getElementById('parent_field1').value = e.toElement.id
    app.toggleTeam1Dialog(true);
  });
  document.getElementById('offs2').addEventListener('click', function(e) {
  	document.getElementById('parent_field2').value = e.toElement.id
    app.toggleTeam2Dialog(true);
  });
  document.getElementById('butAddCancel1').addEventListener('click', function() {
    app.toggleTeam1Dialog(false);
  });
  document.getElementById('butAddRecord1').addEventListener('click', function() {
  	var elem_id = document.getElementById('parent_field1').value;
  	var value = parseInt(document.getElementById(elem_id).innerHTML) + 1;
  	document.getElementById(elem_id).innerHTML = value;
    app.toggleTeam1Dialog(false);
  });
  document.getElementById('butAddCancel2').addEventListener('click', function() {
    app.toggleTeam2Dialog(false);
  });
  document.getElementById('butAddRecord2').addEventListener('click', function() {
  	var elem_id = document.getElementById('parent_field2').value;
  	var value = parseInt(document.getElementById(elem_id).innerHTML) + 1;
  	document.getElementById(elem_id).innerHTML = value;
    app.toggleTeam2Dialog(false);
  });
  document.getElementById('game1').addEventListener('click', function() {
  	document.getElementById('scores1').innerHTML = "0";
  	document.getElementById('scores2').innerHTML = "0";
  	document.getElementById('fouls1').innerHTML = "0";
  	document.getElementById('fouls2').innerHTML = "0";
  	document.getElementById('kicks1').innerHTML = "0";
  	document.getElementById('kicks2').innerHTML = "0";
  	document.getElementById('pens1').innerHTML = "0";
  	document.getElementById('pens2').innerHTML = "0";
  	document.getElementById('offs1').innerHTML = "0";
  	document.getElementById('offs2').innerHTML = "0";
    app.games_list.setAttribute('hidden', true);
    app.refs_list.removeAttribute('hidden');
  });
  document.getElementById('game2').addEventListener('click', function() {
  	document.getElementById('scores1').innerHTML = "0";
  	document.getElementById('scores2').innerHTML = "0";
  	document.getElementById('fouls1').innerHTML = "0";
  	document.getElementById('fouls2').innerHTML = "0";
  	document.getElementById('kicks1').innerHTML = "0";
  	document.getElementById('kicks2').innerHTML = "0";
  	document.getElementById('pens1').innerHTML = "0";
  	document.getElementById('pens2').innerHTML = "0";
  	document.getElementById('offs1').innerHTML = "0";
  	document.getElementById('offs2').innerHTML = "0";
    app.games_list.setAttribute('hidden', true);
    app.refs_list.removeAttribute('hidden');
  });
  document.getElementById('game3').addEventListener('click', function() {
  	document.getElementById('scores1').innerHTML = "0";
  	document.getElementById('scores2').innerHTML = "0";
  	document.getElementById('fouls1').innerHTML = "0";
  	document.getElementById('fouls2').innerHTML = "0";
  	document.getElementById('kicks1').innerHTML = "0";
  	document.getElementById('kicks2').innerHTML = "0";
  	document.getElementById('pens1').innerHTML = "0";
  	document.getElementById('pens2').innerHTML = "0";
  	document.getElementById('offs1').innerHTML = "0";
  	document.getElementById('offs2').innerHTML = "0";
    app.games_list.setAttribute('hidden', true);
    app.refs_list.removeAttribute('hidden');
  });
  document.getElementById('game4').addEventListener('click', function() {
  	document.getElementById('scores1').innerHTML = "0";
  	document.getElementById('scores2').innerHTML = "0";
  	document.getElementById('fouls1').innerHTML = "0";
  	document.getElementById('fouls2').innerHTML = "0";
  	document.getElementById('kicks1').innerHTML = "0";
  	document.getElementById('kicks2').innerHTML = "0";
  	document.getElementById('pens1').innerHTML = "0";
  	document.getElementById('pens2').innerHTML = "0";
  	document.getElementById('offs1').innerHTML = "0";
  	document.getElementById('offs2').innerHTML = "0";
    app.games_list.setAttribute('hidden', true);
    app.refs_list.removeAttribute('hidden');
  });
  document.getElementById('game5').addEventListener('click', function() {
  	document.getElementById('scores1').innerHTML = "0";
  	document.getElementById('scores2').innerHTML = "0";
  	document.getElementById('fouls1').innerHTML = "0";
  	document.getElementById('fouls2').innerHTML = "0";
  	document.getElementById('kicks1').innerHTML = "0";
  	document.getElementById('kicks2').innerHTML = "0";
  	document.getElementById('pens1').innerHTML = "0";
  	document.getElementById('pens2').innerHTML = "0";
  	document.getElementById('offs1').innerHTML = "0";
  	document.getElementById('offs2').innerHTML = "0";
    app.games_list.setAttribute('hidden', true);
    app.refs_list.removeAttribute('hidden');
  });
  document.getElementById('header__title').addEventListener('click', function() {
  	document.getElementById('scores1').innerHTML = "0";
  	document.getElementById('scores2').innerHTML = "0";
  	document.getElementById('fouls1').innerHTML = "0";
  	document.getElementById('fouls2').innerHTML = "0";
  	document.getElementById('kicks1').innerHTML = "0";
  	document.getElementById('kicks2').innerHTML = "0";
  	document.getElementById('pens1').innerHTML = "0";
  	document.getElementById('pens2').innerHTML = "0";
  	document.getElementById('offs1').innerHTML = "0";
  	document.getElementById('offs2').innerHTML = "0";
    app.refs_list.setAttribute('hidden', true);
    app.games_list.removeAttribute('hidden');
  });
})();
