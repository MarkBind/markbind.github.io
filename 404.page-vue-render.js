
    const renderFn = new Function("const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, createStaticVNode: _createStaticVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = /*#__PURE__*/_createStaticVNode(\"<p><div class=\\\"text-center\\\"><p style=\\\"font-size:10rem;\\\">404</p></div> <div class=\\\"text-center\\\"><p style=\\\"font-size:1.5rem;\\\">File not found<br>Click <a href=\\\"/\\\">here</a> to go back to the home page.</p></div></p>\", 1)\nconst _hoisted_2 = [\n  _hoisted_1\n]\n\nreturn function render(_ctx, _cache) {\n  return (_openBlock(), _createElementBlock(\"div\", null, [..._hoisted_2]))\n}");
    var render = renderFn();
  