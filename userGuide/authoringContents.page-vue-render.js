
    const renderFn = new Function("const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, createStaticVNode: _createStaticVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue\n\nconst _hoisted_1 = { sticky: \"\" }\nconst _hoisted_2 = /*#__PURE__*/_createElementVNode(\"a\", {\n  href: \"/index.html\",\n  title: \"Home\",\n  class: \"navbar-brand\"\n}, [\n  /*#__PURE__*/_createElementVNode(\"img\", {\n    src: \"/images/logo-darkbackground.svg\",\n    height: \"20\"\n  })\n], -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    \"highlight-on\": \"exact\",\n    href: \"/index.html\",\n    class: \"nav-link\"\n  }, \"HOME\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/_createElementVNode(\"div\", { tags: \"environment--ug environment--combined\" }, [\n  /*#__PURE__*/_createElementVNode(\"li\", null, [\n    /*#__PURE__*/_createElementVNode(\"a\", {\n      \"highlight-on\": \"sibling-or-child\",\n      href: \"/userGuide/index.html\",\n      class: \"nav-link\"\n    }, \"USER GUIDE\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    \"highlight-on\": \"exact\",\n    href: \"/showcase.html\",\n    class: \"nav-link\"\n  }, \"SHOWCASE\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    \"highlight-on\": \"exact\",\n    href: \"/about.html\",\n    class: \"nav-link\"\n  }, \"ABOUT\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    href: \"https://github.com/MarkBind/markbind\",\n    target: \"_blank\",\n    class: \"nav-link\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", {\n        \"aria-hidden\": \"true\",\n        class: \"fab fa-github\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_8 = { class: \"navbar-form\" }\nconst _hoisted_9 = { id: \"flex-body\" }\nconst _hoisted_10 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-top\" }, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"fw-bold mb-2\",\n    style: {\"font-size\":\"1.25rem\"}\n  }, \"\\n        User Guide\\n      \")\n], -1 /* HOISTED */)\nconst _hoisted_11 = { class: \"nav-component slim-scroll\" }\nconst _hoisted_12 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/gettingStarted.html\" }, \"Getting Started\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_13 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"Authoring Contents \\n\\n\"),\n    /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-dropdown-btn-container\" }, [\n      /*#__PURE__*/_createElementVNode(\"i\", {\n        class: \"site-nav-dropdown-btn-icon site-nav-rotate-icon\",\n        onclick: \"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"span\", {\n          class: \"glyphicon glyphicon-menu-down\",\n          \"aria-hidden\": \"true\"\n        })\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"ul\", { class: \"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list\" }, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/authoringContents.html\" }, \"Overview\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/addingPages.html\" }, \"Adding Pages\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/markBindSyntaxOverview.html\" }, \"MarkBind Syntax Overview\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/formattingContents.html\" }, \"Formatting Contents\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/usingComponents.html\" }, \"Using Components\"),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-dropdown-btn-container\" }, [\n          /*#__PURE__*/_createElementVNode(\"i\", {\n            class: \"site-nav-dropdown-btn-icon site-nav-rotate-icon\",\n            onclick: \"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();\"\n          }, [\n            /*#__PURE__*/_createElementVNode(\"span\", {\n              class: \"glyphicon glyphicon-menu-down\",\n              \"aria-hidden\": \"true\"\n            })\n          ])\n        ])\n      ]),\n      /*#__PURE__*/_createElementVNode(\"ul\", { class: \"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list\" }, [\n        /*#__PURE__*/_createElementVNode(\"li\", null, [\n          /*#__PURE__*/_createElementVNode(\"div\", {\n            class: \"site-nav-default-list-item site-nav-list-item-2\",\n            onclick: \"handleSiteNavClick(this)\"\n          }, [\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/components/presentation.html\" }, \"Presentation\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"li\", null, [\n          /*#__PURE__*/_createElementVNode(\"div\", {\n            class: \"site-nav-default-list-item site-nav-list-item-2\",\n            onclick: \"handleSiteNavClick(this)\"\n          }, [\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/components/imagesAndDiagrams.html\" }, \"Images & Diagrams\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"li\", null, [\n          /*#__PURE__*/_createElementVNode(\"div\", {\n            class: \"site-nav-default-list-item site-nav-list-item-2\",\n            onclick: \"handleSiteNavClick(this)\"\n          }, [\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/components/popups.html\" }, \"Pop-Ups\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"li\", null, [\n          /*#__PURE__*/_createElementVNode(\"div\", {\n            class: \"site-nav-default-list-item site-nav-list-item-2\",\n            onclick: \"handleSiteNavClick(this)\"\n          }, [\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/components/navigation.html\" }, \"Navigation\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"li\", null, [\n          /*#__PURE__*/_createElementVNode(\"div\", {\n            class: \"site-nav-default-list-item site-nav-list-item-2\",\n            onclick: \"handleSiteNavClick(this)\"\n          }, [\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/components/others.html\" }, \"Others\")\n          ])\n        ]),\n        /*#__PURE__*/_createTextVNode(),\n        /*#__PURE__*/_createElementVNode(\"li\", null, [\n          /*#__PURE__*/_createElementVNode(\"div\", {\n            class: \"site-nav-default-list-item site-nav-list-item-2\",\n            onclick: \"handleSiteNavClick(this)\"\n          }, [\n            /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/components/advanced.html\" }, \"Advanced\")\n          ])\n        ])\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/usingHtmlJavaScriptCss.html\" }, \"Using HTML, JavaScript, CSS\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/tweakingThePageStructure.html\" }, \"Tweaking the Page Structure\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/reusingContents.html\" }, \"Reusing Contents\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_14 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"Working with Sites \\n\\n\"),\n    /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-dropdown-btn-container\" }, [\n      /*#__PURE__*/_createElementVNode(\"i\", {\n        class: \"site-nav-dropdown-btn-icon site-nav-rotate-icon\",\n        onclick: \"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"span\", {\n          class: \"glyphicon glyphicon-menu-down\",\n          \"aria-hidden\": \"true\"\n        })\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"ul\", { class: \"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list\" }, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/workingWithSites.html\" }, \"Overview\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/settingSiteProperties.html\" }, \"Setting Site Properties\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/usingPlugins.html\" }, \"Using Plugins\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/makingTheSiteSearchable.html\" }, \"Making the Site Searchable\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/themes.html\" }, \"Applying Themes\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/deployingTheSite.html\" }, \"Deploying the Site\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/markBindInTheProjectWorkflow.html\" }, \"MarkBind in the Project Workflow\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/redirectingToACustom404Page.html\" }, \"Redirecting to a Custom 404 Page\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/addingNavigationButtons.html\" }, \"Adding Navigation Buttons\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/templates.html\" }, \"Templates\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/_createElementVNode(\"li\", null, [\n  /*#__PURE__*/_createElementVNode(\"div\", {\n    class: \"site-nav-default-list-item site-nav-list-item-0\",\n    onclick: \"handleSiteNavClick(this)\"\n  }, [\n    /*#__PURE__*/_createTextVNode(\"References \\n\\n\"),\n    /*#__PURE__*/_createElementVNode(\"div\", { class: \"site-nav-dropdown-btn-container\" }, [\n      /*#__PURE__*/_createElementVNode(\"i\", {\n        class: \"site-nav-dropdown-btn-icon site-nav-rotate-icon\",\n        onclick: \"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"span\", {\n          class: \"glyphicon glyphicon-menu-down\",\n          \"aria-hidden\": \"true\"\n        })\n      ])\n    ])\n  ]),\n  /*#__PURE__*/_createElementVNode(\"ul\", { class: \"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list\" }, [\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/cliCommands.html\" }, \"CLI Commands\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/readerFacingFeatures.html\" }, \"Reader-Facing Features\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/syntaxReference.html\" }, \"Syntax Reference\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/siteJsonFile.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"site.json\"),\n          /*#__PURE__*/_createTextVNode(\" File\")\n        ])\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/gitignoreFile.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \".gitignore\"),\n          /*#__PURE__*/_createTextVNode(\" File\")\n        ])\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/tipsAndTricks.html\" }, \"Tips & Tricks\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/troubleshooting.html\" }, \"Troubleshooting\")\n      ])\n    ]),\n    /*#__PURE__*/_createTextVNode(),\n    /*#__PURE__*/_createElementVNode(\"li\", null, [\n      /*#__PURE__*/_createElementVNode(\"div\", {\n        class: \"site-nav-default-list-item site-nav-list-item-1\",\n        onclick: \"handleSiteNavClick(this)\"\n      }, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/glossary.html\" }, \"Glossary\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_16 = { id: \"content-wrapper\" }\nconst _hoisted_17 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", {\n    id: \"title\",\n    class: \"d-none\"\n  }, \"Authoring Contents\")\n], -1 /* HOISTED */)\nconst _hoisted_18 = /*#__PURE__*/_createElementVNode(\"h1\", { id: \"authoring-contents\" }, [\n  /*#__PURE__*/_createTextVNode(\"Authoring Contents\"),\n  /*#__PURE__*/_createElementVNode(\"a\", {\n    class: \"fa fa-anchor\",\n    href: \"#authoring-contents\",\n    onclick: \"event.stopPropagation()\"\n  })\n], -1 /* HOISTED */)\nconst _hoisted_19 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"large\" }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Adding Pages\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_20 = /*#__PURE__*/_createElementVNode(\"code\", { class: \"hljs inline no-lang\" }, \"site.json\", -1 /* HOISTED */)\nconst _hoisted_21 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"indented\" }, [\n    /*#__PURE__*/_createTextVNode(\"More info in: \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", null, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/addingPages.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"em\", null, \"User Guide → Adding Pages\")\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_22 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"large\" }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"MarkBind Syntax Overview\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_23 = /*#__PURE__*/_createElementVNode(\"blockquote\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"A MarkBind source file may contain a mix of several popular syntax schemes\"),\n    /*#__PURE__*/_createTextVNode(\" used in creating web pages. MarkBind source file can be as simple as basic Markdown, and you can use progressively more complicated syntax to create progressively more sophisticated Web pages while optimizing other aspects such as content reuse.\\n\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_24 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"indented\" }, [\n    /*#__PURE__*/_createTextVNode(\"More info in: \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/markBindSyntaxOverview.html\" }, [\n        /*#__PURE__*/_createElementVNode(\"em\", null, \"User Guide → MarkBind Syntax Overview\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_25 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"large\" }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Formatting Contents\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_26 = /*#__PURE__*/_createElementVNode(\"blockquote\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"MarkBind supports a wide collection of Markdown-like basic content formatting syntax\"),\n    /*#__PURE__*/_createTextVNode(\" such as text styling, tables, lists, images, links, etc.\\n\\n\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_27 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"indented\" }, [\n    /*#__PURE__*/_createTextVNode(\"More info in: \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", null, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/formattingContents.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"em\", null, \"User Guide → Formatting Contents\")\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_28 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"large\" }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Using Components\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_29 = /*#__PURE__*/_createElementVNode(\"blockquote\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"MarkBind provides a number of components\"),\n    /*#__PURE__*/_createTextVNode(\" (e.g., expandable panels, tabbed displays, navigation bars, etc.) that you can use to enhance the appearance/behavior of your pages.\\n\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_30 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"indented\" }, [\n    /*#__PURE__*/_createTextVNode(\"More info in: \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", null, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/usingComponents.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"em\", null, \"User Guide → Using Components\")\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_31 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"large\" }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Using HTML, JavaScript, CSS\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_32 = /*#__PURE__*/_createElementVNode(\"blockquote\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"A MarkBind source file can contain a mixture of HTML, JavaScript, and CSS\"),\n    /*#__PURE__*/_createTextVNode(\" as a normal web page would.\\n\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_33 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"indented\" }, [\n    /*#__PURE__*/_createTextVNode(\"More info in: \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", null, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/usingHtmlJavaScriptCss.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"em\", null, \"User Guide → Using HTML, JavaScript, CSS\")\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_34 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"large\" }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Tweaking the Page Structure\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_35 = /*#__PURE__*/_createElementVNode(\"blockquote\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"MarkBind offers several ways to easily tweak the overall structure of a page\"),\n    /*#__PURE__*/_createTextVNode(\", for example, using headers, footers, scripts, or stylesheets.\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_36 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"indented\" }, [\n    /*#__PURE__*/_createTextVNode(\"More info in: \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", null, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/tweakingThePageStructure.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"em\", null, \"User Guide → Tweaking the Page Structure\")\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_37 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"large\" }, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"Reusing Contents\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_38 = /*#__PURE__*/_createElementVNode(\"blockquote\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", null, [\n    /*#__PURE__*/_createElementVNode(\"strong\", null, \"MarkBind is highly-optimized for content reuse\"),\n    /*#__PURE__*/_createTextVNode(\". It offers several mechanisms to provide readers with many variations of the content while minimizing duplication at source file level. As a result, instead of creating a one-size-fits-all site, MarkBind can create a site in which readers can chart their own path of reading.\\n\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_39 = /*#__PURE__*/_createElementVNode(\"p\", null, [\n  /*#__PURE__*/_createElementVNode(\"span\", { class: \"indented\" }, [\n    /*#__PURE__*/_createTextVNode(\"More info in: \"),\n    /*#__PURE__*/_createElementVNode(\"span\", null, [\n      /*#__PURE__*/_createElementVNode(\"span\", null, [\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"/userGuide/reusingContents.html\" }, [\n          /*#__PURE__*/_createElementVNode(\"em\", null, \"User Guide → Reusing Contents\")\n        ])\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_40 = /*#__PURE__*/_createStaticVNode(\"<div class=\\\"clearfix\\\"><p><span class=\\\"float-start\\\"><a class=\\\"btn btn-light\\\" href=\\\"/userGuide/gettingStarted.html\\\"><span><span aria-hidden=\\\"true\\\" class=\\\"far fa-arrow-alt-circle-left\\\"></span> <span>Getting Started</span></span></a></span></p> <p><span class=\\\"float-end\\\"><a class=\\\"btn btn-light\\\" href=\\\"/userGuide/addingPages.html\\\"><span><span>Adding Pages</span> <span aria-hidden=\\\"true\\\" class=\\\"far fa-arrow-alt-circle-right\\\"></span></span></a></span></p></div>\", 1)\nconst _hoisted_41 = /*#__PURE__*/_createElementVNode(\"br\", null, null, -1 /* HOISTED */)\nconst _hoisted_42 = /*#__PURE__*/_createElementVNode(\"div\", { class: \"nav-component slim-scroll\" }, null, -1 /* HOISTED */)\nconst _hoisted_43 = /*#__PURE__*/_createElementVNode(\"div\", null, [\n  /*#__PURE__*/_createElementVNode(\"footer\", null, [\n    /*#__PURE__*/_createElementVNode(\"div\", { class: \"text-center\" }, [\n      /*#__PURE__*/_createElementVNode(\"small\", null, [\n        /*#__PURE__*/_createTextVNode(\"[Generated by \"),\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://markbind.org/\" }, \"MarkBind 6.0.0\"),\n        /*#__PURE__*/_createTextVNode(\" on Sun, 13 Apr 2025, 13:09:51 UTC]\")\n      ]),\n      /*#__PURE__*/_createElementVNode(\"br\"),\n      /*#__PURE__*/_createTextVNode(),\n      /*#__PURE__*/_createElementVNode(\"small\", null, [\n        /*#__PURE__*/_createTextVNode(\"This site is powered by \"),\n        /*#__PURE__*/_createElementVNode(\"a\", { href: \"https://www.netlify.com/\" }, \"Netlify\"),\n        /*#__PURE__*/_createTextVNode(\".\")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\n\nreturn function render(_ctx, _cache) {\n  const _component_searchbar = _resolveComponent(\"searchbar\")\n  const _component_navbar = _resolveComponent(\"navbar\")\n  const _component_overlay_source = _resolveComponent(\"overlay-source\")\n  const _component_site_nav = _resolveComponent(\"site-nav\")\n  const _component_breadcrumb = _resolveComponent(\"breadcrumb\")\n  const _component_tooltip = _resolveComponent(\"tooltip\")\n  const _component_scroll_top_button = _resolveComponent(\"scroll-top-button\")\n\n  return (_openBlock(), _createElementBlock(_Fragment, null, [\n    _createElementVNode(\"header\", _hoisted_1, [\n      _createVNode(_component_navbar, { type: \"dark\" }, {\n        brand: _withCtx(() => [\n          _hoisted_2\n        ]),\n        right: _withCtx(() => [\n          _createElementVNode(\"li\", null, [\n            _createElementVNode(\"form\", _hoisted_8, [\n              _createVNode(_component_searchbar, {\n                data: _ctx.searchData,\n                placeholder: \"Search\",\n                \"on-hit\": _ctx.searchCallback,\n                \"menu-align-right\": \"\"\n              }, null, 8 /* PROPS */, [\"data\", \"on-hit\"])\n            ])\n          ])\n        ]),\n        default: _withCtx(() => [\n          _createTextVNode(),\n          _hoisted_3,\n          _createTextVNode(),\n          _hoisted_4,\n          _createTextVNode(),\n          _hoisted_5,\n          _createTextVNode(),\n          _hoisted_6,\n          _createTextVNode(),\n          _hoisted_7,\n          _createTextVNode()\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _createTextVNode(),\n    _createElementVNode(\"div\", _hoisted_9, [\n      _createVNode(_component_overlay_source, {\n        id: \"site-nav\",\n        \"tag-name\": \"nav\",\n        to: \"site-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_10,\n          _createTextVNode(),\n          _createElementVNode(\"div\", _hoisted_11, [\n            _createVNode(_component_site_nav, null, {\n              default: _withCtx(() => [\n                _createVNode(_component_overlay_source, {\n                  class: \"site-nav-list site-nav-list-root\",\n                  \"tag-name\": \"ul\",\n                  to: \"mb-site-nav\"\n                }, {\n                  default: _withCtx(() => [\n                    _hoisted_12,\n                    _createTextVNode(),\n                    _hoisted_13,\n                    _createTextVNode(),\n                    _hoisted_14,\n                    _createTextVNode(),\n                    _hoisted_15\n                  ]),\n                  _: 1 /* STABLE */\n                })\n              ]),\n              _: 1 /* STABLE */\n            })\n          ])\n        ]),\n        _: 1 /* STABLE */\n      }),\n      _createTextVNode(),\n      _createElementVNode(\"div\", _hoisted_16, [\n        _createVNode(_component_breadcrumb),\n        _createTextVNode(),\n        _hoisted_17,\n        _createTextVNode(),\n        _hoisted_18,\n        _createTextVNode(),\n        _hoisted_19,\n        _createTextVNode(),\n        _createElementVNode(\"blockquote\", null, [\n          _createElementVNode(\"span\", null, [\n            _createElementVNode(\"strong\", null, [\n              _createTextVNode(\"It is easy to add files to a MarkBind site as any file inside the \"),\n              _createVNode(_component_tooltip, null, {\n                content: _withCtx(() => [\n                  _createTextVNode(\"The directory that contains all the project files. It is also the directory in which the \"),\n                  _hoisted_20,\n                  _createTextVNode(\" configuration file is located.\")\n                ]),\n                default: _withCtx(() => [\n                  _createTextVNode(\"root directory\")\n                ]),\n                _: 1 /* STABLE */\n              }),\n              _createTextVNode(\" becomes a part of the generated website.\")\n            ])\n          ])\n        ]),\n        _createTextVNode(),\n        _hoisted_21,\n        _createTextVNode(),\n        _hoisted_22,\n        _createTextVNode(),\n        _hoisted_23,\n        _createTextVNode(),\n        _hoisted_24,\n        _createTextVNode(),\n        _hoisted_25,\n        _createTextVNode(),\n        _hoisted_26,\n        _createTextVNode(),\n        _hoisted_27,\n        _createTextVNode(),\n        _hoisted_28,\n        _createTextVNode(),\n        _hoisted_29,\n        _createTextVNode(),\n        _hoisted_30,\n        _createTextVNode(),\n        _hoisted_31,\n        _createTextVNode(),\n        _hoisted_32,\n        _createTextVNode(),\n        _hoisted_33,\n        _createTextVNode(),\n        _hoisted_34,\n        _createTextVNode(),\n        _hoisted_35,\n        _createTextVNode(),\n        _hoisted_36,\n        _createTextVNode(),\n        _hoisted_37,\n        _createTextVNode(),\n        _hoisted_38,\n        _createTextVNode(),\n        _hoisted_39,\n        _createTextVNode(),\n        _hoisted_40,\n        _createTextVNode(),\n        _hoisted_41\n      ]),\n      _createTextVNode(),\n      _createVNode(_component_overlay_source, {\n        id: \"page-nav\",\n        \"tag-name\": \"nav\",\n        to: \"page-nav\"\n      }, {\n        default: _withCtx(() => [\n          _hoisted_42\n        ]),\n        _: 1 /* STABLE */\n      }),\n      _createTextVNode(),\n      _createVNode(_component_scroll_top_button)\n    ]),\n    _createTextVNode(),\n    _hoisted_43\n  ], 64 /* STABLE_FRAGMENT */))\n}");
    var render = renderFn();
  