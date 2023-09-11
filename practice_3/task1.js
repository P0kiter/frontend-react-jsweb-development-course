const globalVar = "Global Variable";

function globalScopeFunction() {
  console.log("Global Scope:", globalVar);
}

globalScopeFunction();

function functionScope() {
  const localVar = "Local Variable";
  console.log("Function Scope (inside):", localVar);
}

functionScope();

function blockScope() {
  if (true) {
    const blockVar = "Block Variable";
    console.log("Block Scope (inside):", blockVar);
  }
}

blockScope();
