function foo(novaFuncao) {
  console.log("foo");
  novaFuncao()
}

foo(() =>{
    console.log("callback")
})