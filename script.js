var db = openDatabase('mydb', '1.0', 'Test db', 2 * 1024 * 1024);
var msg;
var code = document.getElementById('comp_code').value;
var name = document.getElementById('comp_name').value;

$('#submit').click(function (){
db.transaction(function (transaction) {
    var sql = 'CREATE TABLE IF NOT EXITS COMPANIES (id unique INTEGER NOT NULL PRIMARY KEY, client_name VARCHAR(20) NOT NULL)';
    tx.executeSql(sql, undefined, function(){ alert('Data Added Successfully')});
});

db.transaction(function (tx){
    tx.executeSql('SELECT * FROM COMPANIES', [], function (tx, results){
        var len = results.rows.length, i;
        msg = "<p> Found rows: " + len + "</p>";
        document.querySelector('#status').innerHTML += msg;
        
        for(i=0; i<len; i++){
            msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
            document.querySelector("#status").innerHTML += msg;
        }
        }, null);

    });