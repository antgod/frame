"use strict";

var my_trace = [];

var add = function add(num1, num2) {
  my_trace.push({
    type: "params",
    key: "num1",
    value: num1,
    params: {
      fn: "add"
    },
    props: {}
  });
  my_trace.push({
    type: "params",
    key: "num2",
    value: num2,
    params: {
      fn: "add"
    },
    props: {}
  });
  var b;
  my_trace.push({
    type: "assign",
    key: "b",
    value: b,
    params: {},
    props: {
      value: undefined
    }
  });
  b = {};
  my_trace.push({
    type: "return",
    key: "add",
    value: add,
    params: {},
    props: {}
  });
  my_trace.push({
    type: "+",
    key: "num1",
    value: num1,
    params: {
      version: "96"
    },
    props: {}
  });
  my_trace.push({
    type: "+",
    key: "num2",
    value: num2,
    params: {
      version: "96"
    },
    props: {}
  });
  return num1 + num2;
};

var mul = function mul(oldNum, newNum) {
  my_trace.push({
    type: "params",
    key: "oldNum",
    value: oldNum,
    params: {
      fn: "mul"
    },
    props: {}
  });
  my_trace.push({
    type: "params",
    key: "newNum",
    value: newNum,
    params: {
      fn: "mul"
    },
    props: {}
  });
  my_trace.push({
    type: "return",
    key: "mul",
    value: mul,
    params: {},
    props: {}
  });
  my_trace.push({
    type: "*",
    key: "oldNum",
    value: oldNum,
    params: {
      version: "94"
    },
    props: {}
  });
  my_trace.push({
    type: "call",
    key: "add",
    value: add,
    params: {},
    props: {}
  });
  return oldNum * add(oldNum, newNum);
};

function compute(num1, num2) {
  my_trace.push({
    type: "params",
    key: "num1",
    value: num1,
    params: {
      fn: "compute"
    },
    props: {}
  });
  my_trace.push({
    type: "params",
    key: "num2",
    value: num2,
    params: {
      fn: "compute"
    },
    props: {}
  });
  my_trace.push({
    type: "return",
    key: "compute",
    value: compute,
    params: {},
    props: {}
  });
  my_trace.push({
    type: "call",
    key: "mul",
    value: mul,
    params: {},
    props: {}
  });
  return mul(num1, num2);
}

var finalFun = compute;
my_trace.push({
  type: "call",
  key: "finalFun",
  value: finalFun,
  params: {},
  props: {}
});
console.log('a :>> ', finalFun(1, 2));
console.log(my_trace);