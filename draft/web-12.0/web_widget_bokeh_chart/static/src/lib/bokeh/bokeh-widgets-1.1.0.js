/*!
 * Copyright (c) 2012 - 2018, Anaconda, Inc., and Bokeh Contributors
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of Anaconda nor the names of any contributors
 * may be used to endorse or promote products derived from this software
 * without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */
!(function (t, e) {
    var n;
    (n = t.Bokeh),
        (function (t, e, i) {
            if (null != n)
                return n.register_plugin(
                    t,
                    {
                        "models/widgets/abstract_button": 410,
                        "models/widgets/abstract_icon": 411,
                        "models/widgets/abstract_slider": 412,
                        "models/widgets/autocomplete_input": 413,
                        "models/widgets/button": 414,
                        "models/widgets/button_group": 415,
                        "models/widgets/checkbox_button_group": 416,
                        "models/widgets/checkbox_group": 417,
                        "models/widgets/color_picker": 418,
                        "models/widgets/control": 419,
                        "models/widgets/date_picker": 420,
                        "models/widgets/date_range_slider": 421,
                        "models/widgets/date_slider": 422,
                        "models/widgets/div": 423,
                        "models/widgets/dropdown": 424,
                        "models/widgets/index": 425,
                        "models/widgets/input_group": 426,
                        "models/widgets/input_widget": 427,
                        "models/widgets/main": 428,
                        "models/widgets/markup": 429,
                        "models/widgets/multiselect": 430,
                        "models/widgets/paragraph": 431,
                        "models/widgets/password_input": 432,
                        "models/widgets/pretext": 433,
                        "models/widgets/radio_button_group": 434,
                        "models/widgets/radio_group": 435,
                        "models/widgets/range_slider": 436,
                        "models/widgets/selectbox": 437,
                        "models/widgets/slider": 438,
                        "models/widgets/spinner": 439,
                        "models/widgets/text_input": 440,
                        "models/widgets/textarea_input": 441,
                        "models/widgets/toggle": 442,
                        "models/widgets/widget": 453,
                    },
                    428
                );
            throw new Error(
                "Cannot find Bokeh. You have to load it prior to loading plugins."
            );
        })({
            410: function (t, e, n) {
                var i = t(400),
                    o = t(18),
                    r = t(5),
                    s = t(4),
                    a = t(419),
                    l = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.initialize = function () {
                                t.prototype.initialize.call(this),
                                    (this.icon_views = {});
                            }),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.change,
                                        function () {
                                            return e.render();
                                        }
                                    );
                            }),
                            (e.prototype.remove = function () {
                                s.remove_views(this.icon_views),
                                    t.prototype.remove.call(this);
                            }),
                            (e.prototype._render_button = function () {
                                for (
                                    var t = [], e = 0;
                                    e < arguments.length;
                                    e++
                                )
                                    t[e] = arguments[e];
                                return r.button.apply(
                                    void 0,
                                    [
                                        {
                                            type: "button",
                                            disabled: this.model.disabled,
                                            class: [
                                                "bk-btn",
                                                "bk-btn-" +
                                                    this.model.button_type,
                                            ],
                                        },
                                    ].concat(t)
                                );
                            }),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this),
                                    (this.button_el = this._render_button(
                                        this.model.label
                                    )),
                                    this.button_el.addEventListener(
                                        "click",
                                        function () {
                                            return e.click();
                                        }
                                    );
                                var n = this.model.icon;
                                if (null != n) {
                                    s.build_views(this.icon_views, [n], {
                                        parent: this,
                                    });
                                    var i = this.icon_views[n.id];
                                    i.render(),
                                        r.prepend(
                                            this.button_el,
                                            i.el,
                                            r.nbsp()
                                        );
                                }
                                (this.group_el = r.div(
                                    { class: "bk-btn-group" },
                                    this.button_el
                                )),
                                    this.el.appendChild(this.group_el);
                            }),
                            (e.prototype.click = function () {
                                null != this.model.callback &&
                                    this.model.callback.execute(this.model);
                            }),
                            e
                        );
                    })(a.ControlView);
                n.AbstractButtonView = l;
                var u = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "AbstractButton"),
                                this.define({
                                    label: [o.String, "Button"],
                                    icon: [o.Instance],
                                    button_type: [o.ButtonType, "default"],
                                    callback: [o.Any],
                                });
                        }),
                        e
                    );
                })(a.Control);
                (n.AbstractButton = u), u.initClass();
            },
            411: function (t, e, n) {
                var i = t(400),
                    o = t(62),
                    r = t(6),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return i.__extends(e, t), e;
                    })(r.DOMView);
                n.AbstractIconView = s;
                var a = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            this.prototype.type = "AbstractIcon";
                        }),
                        e
                    );
                })(o.Model);
                (n.AbstractIcon = a), a.initClass();
            },
            412: function (t, e, n) {
                var i = t(400),
                    o = t(444),
                    r = t(18),
                    s = t(5),
                    a = t(24),
                    l = t(28),
                    u = t(419),
                    c = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            Object.defineProperty(e.prototype, "noUiSlider", {
                                get: function () {
                                    return this.slider_el.noUiSlider;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.initialize = function () {
                                t.prototype.initialize.call(this),
                                    this._init_callback();
                            }),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this);
                                var n = this.model.properties,
                                    i = n.callback,
                                    o = n.callback_policy,
                                    r = n.callback_throttle;
                                this.on_change([i, o, r], function () {
                                    return e._init_callback();
                                });
                                var s = this.model.properties,
                                    a = s.start,
                                    l = s.end,
                                    u = s.value,
                                    c = s.step;
                                this.on_change([a, l, u, c], function () {
                                    var t = e._calc_to(),
                                        n = t.start,
                                        i = t.end,
                                        o = t.value,
                                        r = t.step;
                                    e.noUiSlider.updateOptions({
                                        range: { min: n, max: i },
                                        start: o,
                                        step: r,
                                    });
                                }),
                                    this.on_change(u, function () {
                                        return e._update_title();
                                    });
                            }),
                            (e.prototype._init_callback = function () {
                                var t = this,
                                    e = this.model.callback;
                                if (null != e) {
                                    var n = function () {
                                        return e.execute(t.model);
                                    };
                                    switch (this.model.callback_policy) {
                                        case "continuous":
                                            this.callback_wrapper = n;
                                            break;
                                        case "throttle":
                                            this.callback_wrapper = l.throttle(
                                                n,
                                                this.model.callback_throttle
                                            );
                                            break;
                                        default:
                                            this.callback_wrapper = void 0;
                                    }
                                }
                            }),
                            (e.prototype._update_title = function () {
                                var t = this;
                                s.empty(this.title_el);
                                var e =
                                    null == this.model.title ||
                                    (0 == this.model.title.length &&
                                        !this.model.show_value);
                                if (
                                    ((this.title_el.style.display = e
                                        ? "none"
                                        : ""),
                                    !e &&
                                        (0 != this.model.title.length &&
                                            (this.title_el.textContent =
                                                this.model.title + ": "),
                                        this.model.show_value))
                                ) {
                                    var n = this._calc_to().value,
                                        i = n
                                            .map(function (e) {
                                                return t.model.pretty(e);
                                            })
                                            .join(" .. ");
                                    this.title_el.appendChild(
                                        s.span({ class: "bk-slider-value" }, i)
                                    );
                                }
                            }),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this);
                                var n,
                                    i = "bk-noUi-",
                                    r = this._calc_to(),
                                    l = r.start,
                                    u = r.end,
                                    c = r.value,
                                    h = r.step;
                                if (this.model.tooltips) {
                                    var d = {
                                        to: function (t) {
                                            return e.model.pretty(t);
                                        },
                                    };
                                    n = a.repeat(d, c.length);
                                } else n = !1;
                                if (null == this.slider_el) {
                                    (this.slider_el = s.div()),
                                        o.create(this.slider_el, {
                                            cssPrefix: i,
                                            range: { min: l, max: u },
                                            start: c,
                                            step: h,
                                            behaviour: this.model.behaviour,
                                            connect: this.model.connected,
                                            tooltips: n,
                                            orientation: this.model.orientation,
                                            direction: this.model.direction,
                                        }),
                                        this.noUiSlider.on(
                                            "slide",
                                            function (t, n, i) {
                                                return e._slide(i);
                                            }
                                        ),
                                        this.noUiSlider.on(
                                            "change",
                                            function (t, n, i) {
                                                return e._change(i);
                                            }
                                        );
                                    var p = this.slider_el.querySelector(
                                        ".bk-noUi-handle"
                                    );
                                    p.setAttribute("tabindex", "0"),
                                        p.addEventListener(
                                            "keydown",
                                            function (t) {
                                                var n = e._calc_to().value[0];
                                                switch (t.which) {
                                                    case 37:
                                                        n = Math.max(n - h, l);
                                                        break;
                                                    case 39:
                                                        n = Math.min(n + h, u);
                                                        break;
                                                    default:
                                                        return;
                                                }
                                                (e.model.value = n),
                                                    e.noUiSlider.set(n),
                                                    null !=
                                                        e.callback_wrapper &&
                                                        e.callback_wrapper();
                                            }
                                        );
                                    var f = function (t, n) {
                                        var i = e.slider_el.querySelectorAll(
                                                ".bk-noUi-handle"
                                            )[t],
                                            o = i.querySelector(
                                                ".bk-noUi-tooltip"
                                            );
                                        o.style.display = n ? "block" : "";
                                    };
                                    this.noUiSlider.on(
                                        "start",
                                        function (t, e) {
                                            return f(e, !0);
                                        }
                                    ),
                                        this.noUiSlider.on(
                                            "end",
                                            function (t, e) {
                                                return f(e, !1);
                                            }
                                        );
                                } else
                                    this.noUiSlider.updateOptions({
                                        range: { min: l, max: u },
                                        start: c,
                                        step: h,
                                    });
                                this.model.disabled ||
                                    (this.slider_el.querySelector(
                                        ".bk-noUi-connect"
                                    ).style.backgroundColor = this.model.bar_color),
                                    this.model.disabled
                                        ? this.slider_el.setAttribute(
                                              "disabled",
                                              "true"
                                          )
                                        : this.slider_el.removeAttribute(
                                              "disabled"
                                          ),
                                    (this.title_el = s.div({
                                        class: "bk-slider-title",
                                    })),
                                    this._update_title(),
                                    (this.group_el = s.div(
                                        { class: "bk-input-group" },
                                        this.title_el,
                                        this.slider_el
                                    )),
                                    this.el.appendChild(this.group_el);
                            }),
                            (e.prototype._slide = function (t) {
                                (this.model.value = this._calc_from(t)),
                                    null != this.callback_wrapper &&
                                        this.callback_wrapper();
                            }),
                            (e.prototype._change = function (t) {
                                switch (
                                    ((this.model.value = this._calc_from(t)),
                                    this.model.callback_policy)
                                ) {
                                    case "mouseup":
                                    case "throttle":
                                        null != this.model.callback &&
                                            this.model.callback.execute(
                                                this.model
                                            );
                                }
                            }),
                            e
                        );
                    })(u.ControlView);
                n.AbstractSliderView = c;
                var h = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.connected = !1), n;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "AbstractSlider"),
                                this.define({
                                    title: [r.String, ""],
                                    show_value: [r.Boolean, !0],
                                    start: [r.Any],
                                    end: [r.Any],
                                    value: [r.Any],
                                    step: [r.Number, 1],
                                    format: [r.String],
                                    direction: [r.Any, "ltr"],
                                    tooltips: [r.Boolean, !0],
                                    callback: [r.Any],
                                    callback_throttle: [r.Number, 200],
                                    callback_policy: [
                                        r.SliderCallbackPolicy,
                                        "throttle",
                                    ],
                                    bar_color: [r.Color, "#e6e6e6"],
                                });
                        }),
                        (e.prototype._formatter = function (t, e) {
                            return "" + t;
                        }),
                        (e.prototype.pretty = function (t) {
                            return this._formatter(t, this.format);
                        }),
                        e
                    );
                })(u.Control);
                (n.AbstractSlider = h), h.initClass();
            },
            413: function (t, e, n) {
                var i = t(400),
                    o = t(440),
                    r = t(5),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            var e =
                                (null !== t && t.apply(this, arguments)) ||
                                this;
                            return (e._open = !1), e;
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this),
                                    this.input_el.classList.add(
                                        "bk-autocomplete-input"
                                    ),
                                    this.input_el.addEventListener(
                                        "keydown",
                                        function (t) {
                                            return e._keydown(t);
                                        }
                                    ),
                                    this.input_el.addEventListener(
                                        "keyup",
                                        function (t) {
                                            return e._keyup(t);
                                        }
                                    ),
                                    (this.menu = r.div({
                                        class: ["bk-menu", "bk-below"],
                                    })),
                                    this.menu.addEventListener(
                                        "click",
                                        function (t) {
                                            return e._menu_click(t);
                                        }
                                    ),
                                    this.el.appendChild(this.menu),
                                    r.undisplay(this.menu);
                            }),
                            (e.prototype._update_completions = function (t) {
                                r.empty(this.menu);
                                for (var e = 0, n = t; e < n.length; e++) {
                                    var i = n[e],
                                        o = r.div({}, i);
                                    this.menu.appendChild(o);
                                }
                            }),
                            (e.prototype._show_menu = function () {
                                var t = this;
                                if (!this._open) {
                                    (this._open = !0), r.display(this.menu);
                                    var e = function (n) {
                                        var i = n.target;
                                        i instanceof HTMLElement &&
                                            !t.el.contains(i) &&
                                            (document.removeEventListener(
                                                "click",
                                                e
                                            ),
                                            t._hide_menu());
                                    };
                                    document.addEventListener("click", e);
                                }
                            }),
                            (e.prototype._hide_menu = function () {
                                this._open &&
                                    ((this._open = !1), r.undisplay(this.menu));
                            }),
                            (e.prototype._menu_click = function (t) {
                                t.target != t.currentTarget &&
                                    t.target instanceof Element &&
                                    ((this.input_el.value =
                                        t.target.textContent || ""),
                                    this.input_el.focus(),
                                    this._hide_menu());
                            }),
                            (e.prototype._keydown = function (t) {}),
                            (e.prototype._keyup = function (t) {
                                switch (t.keyCode) {
                                    case r.Keys.Enter:
                                        break;
                                    case r.Keys.Esc:
                                        this._hide_menu();
                                        break;
                                    case r.Keys.Up:
                                    case r.Keys.Down:
                                        break;
                                    default:
                                        var e = this.input_el.value;
                                        if (e.length <= 1)
                                            return void this._hide_menu();
                                        for (
                                            var n = [],
                                                i = 0,
                                                o = this.model.completions;
                                            i < o.length;
                                            i++
                                        ) {
                                            var s = o[i];
                                            -1 != s.indexOf(e) && n.push(s);
                                        }
                                        this._update_completions(n),
                                            0 == n.length
                                                ? this._hide_menu()
                                                : this._show_menu();
                                }
                            }),
                            e
                        );
                    })(o.TextInputView);
                n.AutocompleteInputView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "AutocompleteInput"),
                                (this.prototype.default_view = a),
                                this.define({ completions: [s.Array, []] });
                        }),
                        e
                    );
                })(o.TextInput);
                (n.AutocompleteInput = l), l.initClass();
            },
            414: function (t, e, n) {
                var i = t(400),
                    o = t(410),
                    r = t(3),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.click = function () {
                                (this.model.clicks = this.model.clicks + 1),
                                    this.model.trigger_event(
                                        new r.ButtonClick()
                                    ),
                                    t.prototype.click.call(this);
                            }),
                            e
                        );
                    })(o.AbstractButtonView);
                n.ButtonView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Button"),
                                (this.prototype.default_view = a),
                                this.define({ clicks: [s.Number, 0] }),
                                this.override({ label: "Button" });
                        }),
                        e
                    );
                })(o.AbstractButton);
                (n.Button = l), l.initClass();
            },
            415: function (t, e, n) {
                var i = t(400),
                    o = t(419),
                    r = t(5),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this);
                                var n = this.model.properties;
                                this.on_change(n.button_type, function () {
                                    return e.render();
                                }),
                                    this.on_change(n.labels, function () {
                                        return e.render();
                                    }),
                                    this.on_change(n.active, function () {
                                        return e._update_active();
                                    });
                            }),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this),
                                    (this._buttons = this.model.labels.map(
                                        function (t, n) {
                                            var i = r.div(
                                                {
                                                    class: [
                                                        "bk-btn",
                                                        "bk-btn-" +
                                                            e.model.button_type,
                                                    ],
                                                    disabled: e.model.disabled,
                                                },
                                                t
                                            );
                                            return (
                                                i.addEventListener(
                                                    "click",
                                                    function () {
                                                        return e.change_active(
                                                            n
                                                        );
                                                    }
                                                ),
                                                i
                                            );
                                        }
                                    )),
                                    this._update_active();
                                var n = r.div(
                                    { class: "bk-btn-group" },
                                    this._buttons
                                );
                                this.el.appendChild(n);
                            }),
                            e
                        );
                    })(o.ControlView);
                n.ButtonGroupView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "ButtonGroup"),
                                this.define({
                                    labels: [s.Array, []],
                                    button_type: [s.ButtonType, "default"],
                                    callback: [s.Any],
                                });
                        }),
                        e
                    );
                })(o.Control);
                (n.ButtonGroup = l), l.initClass();
            },
            416: function (t, e, n) {
                var i = t(400),
                    o = t(415),
                    r = t(5),
                    s = t(32),
                    a = t(18),
                    l = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            Object.defineProperty(e.prototype, "active", {
                                get: function () {
                                    return new s.Set(this.model.active);
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.change_active = function (t) {
                                var e = this.active;
                                e.toggle(t),
                                    (this.model.active = e.values),
                                    null != this.model.callback &&
                                        this.model.callback.execute(this.model);
                            }),
                            (e.prototype._update_active = function () {
                                var t = this.active;
                                this._buttons.forEach(function (e, n) {
                                    r.classes(e).toggle("bk-active", t.has(n));
                                });
                            }),
                            e
                        );
                    })(o.ButtonGroupView);
                n.CheckboxButtonGroupView = l;
                var u = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "CheckboxButtonGroup"),
                                (this.prototype.default_view = l),
                                this.define({ active: [a.Array, []] });
                        }),
                        e
                    );
                })(o.ButtonGroup);
                (n.CheckboxButtonGroup = u), u.initClass();
            },
            417: function (t, e, n) {
                var i = t(400),
                    o = t(426),
                    r = t(5),
                    s = t(24),
                    a = t(32),
                    l = t(18),
                    u = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this);
                                var n = r.div({
                                    class: [
                                        "bk-input-group",
                                        this.model.inline ? "bk-inline" : null,
                                    ],
                                });
                                this.el.appendChild(n);
                                for (
                                    var i = this.model,
                                        o = i.active,
                                        a = i.labels,
                                        l = function (t) {
                                            var i = r.input({
                                                type: "checkbox",
                                                value: "" + t,
                                            });
                                            i.addEventListener(
                                                "change",
                                                function () {
                                                    return e.change_active(t);
                                                }
                                            ),
                                                u.model.disabled &&
                                                    (i.disabled = !0),
                                                s.includes(o, t) &&
                                                    (i.checked = !0);
                                            var l = r.label(
                                                {},
                                                i,
                                                r.span({}, a[t])
                                            );
                                            n.appendChild(l);
                                        },
                                        u = this,
                                        c = 0;
                                    c < a.length;
                                    c++
                                )
                                    l(c);
                            }),
                            (e.prototype.change_active = function (t) {
                                var e = new a.Set(this.model.active);
                                e.toggle(t),
                                    (this.model.active = e.values),
                                    null != this.model.callback &&
                                        this.model.callback.execute(this.model);
                            }),
                            e
                        );
                    })(o.InputGroupView);
                n.CheckboxGroupView = u;
                var c = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "CheckboxGroup"),
                                (this.prototype.default_view = u),
                                this.define({
                                    active: [l.Array, []],
                                    labels: [l.Array, []],
                                    inline: [l.Boolean, !1],
                                    callback: [l.Any],
                                });
                        }),
                        e
                    );
                })(o.InputGroup);
                (n.CheckboxGroup = c), c.initClass();
            },
            418: function (t, e, n) {
                var i = t(400),
                    o = t(427),
                    r = t(5),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.properties.name.change,
                                        function () {
                                            return (e.input_el.name =
                                                e.model.name || "");
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.color.change,
                                        function () {
                                            return (e.input_el.value =
                                                e.model.color);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.disabled.change,
                                        function () {
                                            return (e.input_el.disabled =
                                                e.model.disabled);
                                        }
                                    );
                            }),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this),
                                    (this.input_el = r.input({
                                        type: "color",
                                        class: "bk-input",
                                        name: this.model.name,
                                        value: this.model.color,
                                        disabled: this.model.disabled,
                                    })),
                                    this.input_el.addEventListener(
                                        "change",
                                        function () {
                                            return e.change_input();
                                        }
                                    ),
                                    this.group_el.appendChild(this.input_el);
                            }),
                            (e.prototype.change_input = function () {
                                (this.model.color = this.input_el.value),
                                    t.prototype.change_input.call(this);
                            }),
                            e
                        );
                    })(o.InputWidgetView);
                n.ColorPickerView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "ColorPicker"),
                                (this.prototype.default_view = a),
                                this.define({ color: [s.Color, "#000000"] });
                        }),
                        e
                    );
                })(o.InputWidget);
                (n.ColorPicker = l), l.initClass();
            },
            419: function (t, e, n) {
                var i = t(400),
                    o = t(453),
                    r = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this);
                                var n = this.model.properties;
                                this.on_change(n.disabled, function () {
                                    return e.render();
                                });
                            }),
                            e
                        );
                    })(o.WidgetView);
                n.ControlView = r;
                var s = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            this.prototype.type = "Control";
                        }),
                        e
                    );
                })(o.Widget);
                (n.Control = s), s.initClass();
            },
            420: function (t, e, n) {
                var i = t(400),
                    o = t(427),
                    r = t(5),
                    s = t(18),
                    a = t(445);
                a.prototype.adjustPosition = function () {
                    if (!this._o.container) {
                        this.el.style.position = "absolute";
                        var t = this._o.trigger,
                            e = this.el.offsetWidth,
                            n = this.el.offsetHeight,
                            i =
                                window.innerWidth ||
                                document.documentElement.clientWidth,
                            o =
                                window.innerHeight ||
                                document.documentElement.clientHeight,
                            r =
                                window.pageYOffset ||
                                document.body.scrollTop ||
                                document.documentElement.scrollTop,
                            s = t.getBoundingClientRect(),
                            a = s.left + window.pageXOffset,
                            l = s.bottom + window.pageYOffset;
                        (a -= this.el.parentElement.offsetLeft),
                            (l -= this.el.parentElement.offsetTop),
                            ((this._o.reposition && a + e > i) ||
                                (this._o.position.indexOf("right") > -1 &&
                                    a - e + t.offsetWidth > 0)) &&
                                (a = a - e + t.offsetWidth),
                            ((this._o.reposition && l + n > o + r) ||
                                (this._o.position.indexOf("top") > -1 &&
                                    l - n - t.offsetHeight > 0)) &&
                                (l = l - n - t.offsetHeight),
                            (this.el.style.left = a + "px"),
                            (this.el.style.top = l + "px");
                    }
                };
                var l = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.prototype.render = function () {
                            var e = this;
                            null != this._picker && this._picker.destroy(),
                                t.prototype.render.call(this),
                                (this.input_el = r.input({
                                    type: "text",
                                    class: "bk-input",
                                    disabled: this.model.disabled,
                                })),
                                this.group_el.appendChild(this.input_el),
                                (this._picker = new a({
                                    field: this.input_el,
                                    defaultDate: new Date(this.model.value),
                                    setDefaultDate: !0,
                                    minDate:
                                        null != this.model.min_date
                                            ? new Date(this.model.min_date)
                                            : void 0,
                                    maxDate:
                                        null != this.model.max_date
                                            ? new Date(this.model.max_date)
                                            : void 0,
                                    onSelect: function (t) {
                                        return e._on_select(t);
                                    },
                                })),
                                this._root_element.appendChild(this._picker.el);
                        }),
                        (e.prototype._on_select = function (t) {
                            (this.model.value = t.toDateString()),
                                this.change_input();
                        }),
                        e
                    );
                })(o.InputWidgetView);
                n.DatePickerView = l;
                var u = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "DatePicker"),
                                (this.prototype.default_view = l),
                                this.define({
                                    value: [s.Any, new Date().toDateString()],
                                    min_date: [s.Any],
                                    max_date: [s.Any],
                                });
                        }),
                        e
                    );
                })(o.InputWidget);
                (n.DatePicker = u), u.initClass();
            },
            421: function (t, e, n) {
                var i = t(400),
                    o = t(399),
                    r = t(412),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype._calc_to = function () {
                                return {
                                    start: this.model.start,
                                    end: this.model.end,
                                    value: this.model.value,
                                    step: this.model.step,
                                };
                            }),
                            (e.prototype._calc_from = function (t) {
                                return t;
                            }),
                            e
                        );
                    })(r.AbstractSliderView);
                n.DateRangeSliderView = s;
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.behaviour = "drag"),
                            (n.connected = [!1, !0, !1]),
                            n
                        );
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "DateRangeSlider"),
                                (this.prototype.default_view = s),
                                this.override({ format: "%d %b %Y" });
                        }),
                        (e.prototype._formatter = function (t, e) {
                            return o(t, e);
                        }),
                        e
                    );
                })(r.AbstractSlider);
                (n.DateRangeSlider = a), a.initClass();
            },
            422: function (t, e, n) {
                var i = t(400),
                    o = t(399),
                    r = t(412),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype._calc_to = function () {
                                return {
                                    start: this.model.start,
                                    end: this.model.end,
                                    value: [this.model.value],
                                    step: this.model.step,
                                };
                            }),
                            (e.prototype._calc_from = function (t) {
                                var e = t[0];
                                return e;
                            }),
                            e
                        );
                    })(r.AbstractSliderView);
                n.DateSliderView = s;
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.behaviour = "tap"), (n.connected = [!0, !1]), n
                        );
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "DateSlider"),
                                (this.prototype.default_view = s),
                                this.override({ format: "%d %b %Y" });
                        }),
                        (e.prototype._formatter = function (t, e) {
                            return o(t, e);
                        }),
                        e
                    );
                })(r.AbstractSlider);
                (n.DateSlider = a), a.initClass();
            },
            423: function (t, e, n) {
                var i = t(400),
                    o = t(429),
                    r = t(18),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                t.prototype.render.call(this),
                                    this.model.render_as_text
                                        ? (this.markup_el.textContent = this.model.text)
                                        : (this.markup_el.innerHTML = this.model.text);
                            }),
                            e
                        );
                    })(o.MarkupView);
                n.DivView = s;
                var a = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Div"),
                                (this.prototype.default_view = s),
                                this.define({
                                    render_as_text: [r.Boolean, !1],
                                });
                        }),
                        e
                    );
                })(o.Markup);
                (n.Div = a), a.initClass();
            },
            424: function (t, e, n) {
                var i = t(400),
                    o = t(410),
                    r = t(3),
                    s = t(5),
                    a = t(18),
                    l = t(46),
                    u = (function (t) {
                        function e() {
                            var e =
                                (null !== t && t.apply(this, arguments)) ||
                                this;
                            return (e._open = !1), e;
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this);
                                var n = s.div({
                                    class: ["bk-caret", "bk-down"],
                                });
                                if (this.model.is_split) {
                                    var i = this._render_button(n);
                                    i.classList.add("bk-dropdown-toggle"),
                                        i.addEventListener(
                                            "click",
                                            function () {
                                                return e._toggle_menu();
                                            }
                                        ),
                                        this.group_el.appendChild(i);
                                } else this.button_el.appendChild(n);
                                var o = this.model.menu.map(function (t, n) {
                                    if (null == t)
                                        return s.div({ class: "bk-divider" });
                                    var i = l.isString(t) ? t : t[0],
                                        o = s.div({}, i);
                                    return (
                                        o.addEventListener(
                                            "click",
                                            function () {
                                                return e._item_click(n);
                                            }
                                        ),
                                        o
                                    );
                                });
                                (this.menu = s.div(
                                    { class: ["bk-menu", "bk-below"] },
                                    o
                                )),
                                    this.el.appendChild(this.menu),
                                    s.undisplay(this.menu);
                            }),
                            (e.prototype._show_menu = function () {
                                var t = this;
                                if (!this._open) {
                                    (this._open = !0), s.display(this.menu);
                                    var e = function (n) {
                                        var i = n.target;
                                        i instanceof HTMLElement &&
                                            !t.el.contains(i) &&
                                            (document.removeEventListener(
                                                "click",
                                                e
                                            ),
                                            t._hide_menu());
                                    };
                                    document.addEventListener("click", e);
                                }
                            }),
                            (e.prototype._hide_menu = function () {
                                this._open &&
                                    ((this._open = !1), s.undisplay(this.menu));
                            }),
                            (e.prototype._toggle_menu = function () {
                                this._open
                                    ? this._hide_menu()
                                    : this._show_menu();
                            }),
                            (e.prototype.click = function () {
                                this.model.is_split
                                    ? (this._hide_menu(),
                                      this.model.trigger_event(
                                          new r.ButtonClick()
                                      ),
                                      (this.model.value = this.model.default_value),
                                      null != this.model.callback &&
                                          this.model.callback.execute(
                                              this.model
                                          ),
                                      t.prototype.click.call(this))
                                    : this._toggle_menu();
                            }),
                            (e.prototype._item_click = function (t) {
                                this._hide_menu();
                                var e = this.model.menu[t];
                                if (null != e) {
                                    var n = l.isString(e) ? e : e[1];
                                    l.isString(n)
                                        ? (this.model.trigger_event(
                                              new r.MenuItemClick(n)
                                          ),
                                          (this.model.value = n),
                                          null != this.model.callback &&
                                              this.model.callback.execute(
                                                  this.model
                                              ))
                                        : (n.execute(this.model, { index: t }),
                                          null != this.model.callback &&
                                              this.model.callback.execute(
                                                  this.model
                                              ));
                                }
                            }),
                            e
                        );
                    })(o.AbstractButtonView);
                n.DropdownView = u;
                var c = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Dropdown"),
                                (this.prototype.default_view = u),
                                this.define({
                                    split: [a.Boolean, !1],
                                    menu: [a.Array, []],
                                    value: [a.String],
                                    default_value: [a.String],
                                }),
                                this.override({ label: "Dropdown" });
                        }),
                        Object.defineProperty(e.prototype, "is_split", {
                            get: function () {
                                return this.split || null != this.default_value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })(o.AbstractButton);
                (n.Dropdown = c), c.initClass();
            },
            425: function (t, e, n) {
                var i = t(410);
                n.AbstractButton = i.AbstractButton;
                var o = t(411);
                n.AbstractIcon = o.AbstractIcon;
                var r = t(413);
                n.AutocompleteInput = r.AutocompleteInput;
                var s = t(414);
                n.Button = s.Button;
                var a = t(416);
                n.CheckboxButtonGroup = a.CheckboxButtonGroup;
                var l = t(417);
                n.CheckboxGroup = l.CheckboxGroup;
                var u = t(418);
                n.ColorPicker = u.ColorPicker;
                var c = t(420);
                n.DatePicker = c.DatePicker;
                var h = t(421);
                n.DateRangeSlider = h.DateRangeSlider;
                var d = t(422);
                n.DateSlider = d.DateSlider;
                var p = t(423);
                n.Div = p.Div;
                var f = t(424);
                n.Dropdown = f.Dropdown;
                var m = t(427);
                n.InputWidget = m.InputWidget;
                var g = t(429);
                n.Markup = g.Markup;
                var v = t(430);
                n.MultiSelect = v.MultiSelect;
                var _ = t(431);
                n.Paragraph = _.Paragraph;
                var y = t(432);
                n.PasswordInput = y.PasswordInput;
                var b = t(433);
                n.PreText = b.PreText;
                var w = t(434);
                n.RadioButtonGroup = w.RadioButtonGroup;
                var x = t(435);
                n.RadioGroup = x.RadioGroup;
                var k = t(436);
                n.RangeSlider = k.RangeSlider;
                var S = t(437);
                n.Select = S.Select;
                var C = t(438);
                n.Slider = C.Slider;
                var D = t(439);
                n.Spinner = D.Spinner;
                var E = t(440);
                n.TextInput = E.TextInput;
                var M = t(441);
                n.TextAreaInput = M.TextAreaInput;
                var A = t(442);
                n.Toggle = A.Toggle;
                var N = t(453);
                n.Widget = N.Widget;
            },
            426: function (t, e, n) {
                var i = t(400),
                    o = t(419),
                    r = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.change,
                                        function () {
                                            return e.render();
                                        }
                                    );
                            }),
                            e
                        );
                    })(o.ControlView);
                n.InputGroupView = r;
                var s = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            this.prototype.type = "InputGroup";
                        }),
                        e
                    );
                })(o.Control);
                (n.InputGroup = s), s.initClass();
            },
            427: function (t, e, n) {
                var i = t(400),
                    o = t(419),
                    r = t(5),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.properties.title.change,
                                        function () {
                                            e.label_el.textContent =
                                                e.model.title;
                                        }
                                    );
                            }),
                            (e.prototype.render = function () {
                                t.prototype.render.call(this);
                                var e = this.model.title;
                                (this.label_el = r.label(
                                    {
                                        style: {
                                            display:
                                                0 == e.length ? "none" : "",
                                        },
                                    },
                                    e
                                )),
                                    (this.group_el = r.div(
                                        { class: "bk-input-group" },
                                        this.label_el
                                    )),
                                    this.el.appendChild(this.group_el);
                            }),
                            (e.prototype.change_input = function () {
                                null != this.model.callback &&
                                    this.model.callback.execute(this.model);
                            }),
                            e
                        );
                    })(o.ControlView);
                n.InputWidgetView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "InputWidget"),
                                this.define({
                                    title: [s.String, ""],
                                    callback: [s.Any],
                                });
                        }),
                        e
                    );
                })(o.Control);
                (n.InputWidget = l), l.initClass();
            },
            428: function (t, e, n) {
                var i = t(425);
                n.Widgets = i;
                var o = t(0);
                o.register_models(i);
            },
            429: function (t, e, n) {
                var i = t(400),
                    o = t(13),
                    r = t(5),
                    s = t(18),
                    a = t(453),
                    l = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.change,
                                        function () {
                                            e.render(), e.root.compute_layout();
                                        }
                                    );
                            }),
                            (e.prototype._update_layout = function () {
                                (this.layout = new o.VariadicBox(this.el)),
                                    this.layout.set_sizing(this.box_sizing());
                            }),
                            (e.prototype.render = function () {
                                t.prototype.render.call(this);
                                var e = i.__assign({}, this.model.style, {
                                    display: "inline-block",
                                });
                                (this.markup_el = r.div({
                                    class: "bk-clearfix",
                                    style: e,
                                })),
                                    this.el.appendChild(this.markup_el);
                            }),
                            e
                        );
                    })(a.WidgetView);
                n.MarkupView = l;
                var u = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Markup"),
                                this.define({
                                    text: [s.String, ""],
                                    style: [s.Any, {}],
                                });
                        }),
                        e
                    );
                })(a.Widget);
                (n.Markup = u), u.initClass();
            },
            430: function (t, e, n) {
                var i = t(400),
                    o = t(5),
                    r = t(46),
                    s = t(32),
                    a = t(18),
                    l = t(427),
                    u = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.properties.value.change,
                                        function () {
                                            return e.render_selection();
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.options.change,
                                        function () {
                                            return e.render();
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.name.change,
                                        function () {
                                            return e.render();
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.title.change,
                                        function () {
                                            return e.render();
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.size.change,
                                        function () {
                                            return e.render();
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.disabled.change,
                                        function () {
                                            return e.render();
                                        }
                                    );
                            }),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this);
                                var n = this.model.options.map(function (t) {
                                    var e, n;
                                    return (
                                        r.isString(t)
                                            ? (e = n = t)
                                            : ((e = t[0]), (n = t[1])),
                                        o.option({ value: e }, n)
                                    );
                                });
                                (this.select_el = o.select(
                                    {
                                        multiple: !0,
                                        class: "bk-input",
                                        name: this.model.name,
                                        disabled: this.model.disabled,
                                    },
                                    n
                                )),
                                    this.select_el.addEventListener(
                                        "change",
                                        function () {
                                            return e.change_input();
                                        }
                                    ),
                                    this.group_el.appendChild(this.select_el),
                                    this.render_selection();
                            }),
                            (e.prototype.render_selection = function () {
                                for (
                                    var t = new s.Set(this.model.value),
                                        e = 0,
                                        n = Array.from(
                                            this.el.querySelectorAll("option")
                                        );
                                    e < n.length;
                                    e++
                                ) {
                                    var i = n[e];
                                    i.selected = t.has(i.value);
                                }
                                this.select_el.size = this.model.size;
                            }),
                            (e.prototype.change_input = function () {
                                for (
                                    var e =
                                            null !=
                                            this.el.querySelector(
                                                "select:focus"
                                            ),
                                        n = [],
                                        i = 0,
                                        o = Array.from(
                                            this.el.querySelectorAll("option")
                                        );
                                    i < o.length;
                                    i++
                                ) {
                                    var r = o[i];
                                    r.selected && n.push(r.value);
                                }
                                (this.model.value = n),
                                    t.prototype.change_input.call(this),
                                    e && this.select_el.focus();
                            }),
                            e
                        );
                    })(l.InputWidgetView);
                n.MultiSelectView = u;
                var c = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "MultiSelect"),
                                (this.prototype.default_view = u),
                                this.define({
                                    value: [a.Array, []],
                                    options: [a.Array, []],
                                    size: [a.Number, 4],
                                });
                        }),
                        e
                    );
                })(l.InputWidget);
                (n.MultiSelect = c), c.initClass();
            },
            431: function (t, e, n) {
                var i = t(400),
                    o = t(429),
                    r = t(5),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                t.prototype.render.call(this);
                                var e = r.p(
                                    { style: { margin: 0 } },
                                    this.model.text
                                );
                                this.markup_el.appendChild(e);
                            }),
                            e
                        );
                    })(o.MarkupView);
                n.ParagraphView = s;
                var a = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Paragraph"),
                                (this.prototype.default_view = s);
                        }),
                        e
                    );
                })(o.Markup);
                (n.Paragraph = a), a.initClass();
            },
            432: function (t, e, n) {
                var i = t(400),
                    o = t(440),
                    r = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                t.prototype.render.call(this),
                                    (this.input_el.type = "password");
                            }),
                            e
                        );
                    })(o.TextInputView);
                n.PasswordInputView = r;
                var s = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "PasswordInput"),
                                (this.prototype.default_view = r);
                        }),
                        e
                    );
                })(o.TextInput);
                (n.PasswordInput = s), s.initClass();
            },
            433: function (t, e, n) {
                var i = t(400),
                    o = t(429),
                    r = t(5),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                t.prototype.render.call(this);
                                var e = r.pre(
                                    { style: { overflow: "auto" } },
                                    this.model.text
                                );
                                this.markup_el.appendChild(e);
                            }),
                            e
                        );
                    })(o.MarkupView);
                n.PreTextView = s;
                var a = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "PreText"),
                                (this.prototype.default_view = s);
                        }),
                        e
                    );
                })(o.Markup);
                (n.PreText = a), a.initClass();
            },
            434: function (t, e, n) {
                var i = t(400),
                    o = t(415),
                    r = t(5),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.change_active = function (t) {
                                this.model.active !== t &&
                                    ((this.model.active = t),
                                    null != this.model.callback &&
                                        this.model.callback.execute(
                                            this.model
                                        ));
                            }),
                            (e.prototype._update_active = function () {
                                var t = this.model.active;
                                this._buttons.forEach(function (e, n) {
                                    r.classes(e).toggle("bk-active", t === n);
                                });
                            }),
                            e
                        );
                    })(o.ButtonGroupView);
                n.RadioButtonGroupView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "RadioButtonGroup"),
                                (this.prototype.default_view = a),
                                this.define({ active: [s.Any, null] });
                        }),
                        e
                    );
                })(o.ButtonGroup);
                (n.RadioButtonGroup = l), l.initClass();
            },
            435: function (t, e, n) {
                var i = t(400),
                    o = t(5),
                    r = t(40),
                    s = t(18),
                    a = t(426),
                    l = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this);
                                var n = o.div({
                                    class: [
                                        "bk-input-group",
                                        this.model.inline ? "bk-inline" : null,
                                    ],
                                });
                                this.el.appendChild(n);
                                for (
                                    var i = r.uniqueId(),
                                        s = this.model,
                                        a = s.active,
                                        l = s.labels,
                                        u = function (t) {
                                            var r = o.input({
                                                type: "radio",
                                                name: i,
                                                value: "" + t,
                                            });
                                            r.addEventListener(
                                                "change",
                                                function () {
                                                    return e.change_active(t);
                                                }
                                            ),
                                                c.model.disabled &&
                                                    (r.disabled = !0),
                                                t == a && (r.checked = !0);
                                            var s = o.label(
                                                {},
                                                r,
                                                o.span({}, l[t])
                                            );
                                            n.appendChild(s);
                                        },
                                        c = this,
                                        h = 0;
                                    h < l.length;
                                    h++
                                )
                                    u(h);
                            }),
                            (e.prototype.change_active = function (t) {
                                (this.model.active = t),
                                    null != this.model.callback &&
                                        this.model.callback.execute(this.model);
                            }),
                            e
                        );
                    })(a.InputGroupView);
                n.RadioGroupView = l;
                var u = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "RadioGroup"),
                                (this.prototype.default_view = l),
                                this.define({
                                    active: [s.Number],
                                    labels: [s.Array, []],
                                    inline: [s.Boolean, !1],
                                    callback: [s.Any],
                                });
                        }),
                        e
                    );
                })(a.InputGroup);
                (n.RadioGroup = u), u.initClass();
            },
            436: function (t, e, n) {
                var i = t(400),
                    o = t(370),
                    r = t(412),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype._calc_to = function () {
                                return {
                                    start: this.model.start,
                                    end: this.model.end,
                                    value: this.model.value,
                                    step: this.model.step,
                                };
                            }),
                            (e.prototype._calc_from = function (t) {
                                return t;
                            }),
                            e
                        );
                    })(r.AbstractSliderView);
                n.RangeSliderView = s;
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.behaviour = "drag"),
                            (n.connected = [!1, !0, !1]),
                            n
                        );
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "RangeSlider"),
                                (this.prototype.default_view = s),
                                this.override({ format: "0[.]00" });
                        }),
                        (e.prototype._formatter = function (t, e) {
                            return o.format(t, e);
                        }),
                        e
                    );
                })(r.AbstractSlider);
                (n.RangeSlider = a), a.initClass();
            },
            437: function (t, e, n) {
                var i = t(400),
                    o = t(5),
                    r = t(46),
                    s = t(17),
                    a = t(18),
                    l = t(427),
                    u = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.change,
                                        function () {
                                            return e.render();
                                        }
                                    );
                            }),
                            (e.prototype.build_options = function (t) {
                                var e = this;
                                return t.map(function (t) {
                                    var n, i;
                                    r.isString(t)
                                        ? (n = i = t)
                                        : ((n = t[0]), (i = t[1]));
                                    var s = e.model.value == n;
                                    return o.option(
                                        { selected: s, value: n },
                                        i
                                    );
                                });
                            }),
                            (e.prototype.render = function () {
                                var e,
                                    n = this;
                                if (
                                    (t.prototype.render.call(this),
                                    r.isArray(this.model.options))
                                )
                                    e = this.build_options(this.model.options);
                                else {
                                    e = [];
                                    var i = this.model.options;
                                    for (var s in i) {
                                        var a = i[s];
                                        e.push(
                                            o.optgroup(
                                                { label: s },
                                                this.build_options(a)
                                            )
                                        );
                                    }
                                }
                                (this.select_el = o.select(
                                    {
                                        class: "bk-input",
                                        id: this.model.id,
                                        name: this.model.name,
                                        disabled: this.model.disabled,
                                    },
                                    e
                                )),
                                    this.select_el.addEventListener(
                                        "change",
                                        function () {
                                            return n.change_input();
                                        }
                                    ),
                                    this.group_el.appendChild(this.select_el);
                            }),
                            (e.prototype.change_input = function () {
                                var e = this.select_el.value;
                                s.logger.debug("selectbox: value = " + e),
                                    (this.model.value = e),
                                    t.prototype.change_input.call(this);
                            }),
                            e
                        );
                    })(l.InputWidgetView);
                n.SelectView = u;
                var c = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Select"),
                                (this.prototype.default_view = u),
                                this.define({
                                    value: [a.String, ""],
                                    options: [a.Any, []],
                                });
                        }),
                        e
                    );
                })(l.InputWidget);
                (n.Select = c), c.initClass();
            },
            438: function (t, e, n) {
                var i = t(400),
                    o = t(370),
                    r = t(412),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype._calc_to = function () {
                                return {
                                    start: this.model.start,
                                    end: this.model.end,
                                    value: [this.model.value],
                                    step: this.model.step,
                                };
                            }),
                            (e.prototype._calc_from = function (t) {
                                var e = t[0];
                                return Number.isInteger(this.model.start) &&
                                    Number.isInteger(this.model.end) &&
                                    Number.isInteger(this.model.step)
                                    ? Math.round(e)
                                    : e;
                            }),
                            e
                        );
                    })(r.AbstractSliderView);
                n.SliderView = s;
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.behaviour = "tap"), (n.connected = [!0, !1]), n
                        );
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Slider"),
                                (this.prototype.default_view = s),
                                this.override({ format: "0[.]00" });
                        }),
                        (e.prototype._formatter = function (t, e) {
                            return o.format(t, e);
                        }),
                        e
                    );
                })(r.AbstractSlider);
                (n.Slider = a), a.initClass();
            },
            439: function (t, e, n) {
                var i = t(400),
                    o = t(427),
                    r = t(5),
                    s = t(18),
                    a = Math.abs,
                    l = Math.floor,
                    u = Math.log10;
                function c(t) {
                    var e = a(Number(String(t).replace(".", "")));
                    if (0 == e) return 0;
                    for (; 0 != e && e % 10 == 0; ) e /= 10;
                    return l(u(e)) + 1;
                }
                var h = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.prototype.connect_signals = function () {
                            var e = this;
                            t.prototype.connect_signals.call(this),
                                this.connect(
                                    this.model.properties.low.change,
                                    function () {
                                        var t = e.model.low;
                                        null != t &&
                                            (e.input_el.min = t.toFixed(16));
                                    }
                                ),
                                this.connect(
                                    this.model.properties.high.change,
                                    function () {
                                        var t = e.model.high;
                                        null != t &&
                                            (e.input_el.max = t.toFixed(16));
                                    }
                                ),
                                this.connect(
                                    this.model.properties.step.change,
                                    function () {
                                        var t = e.model.step;
                                        e.input_el.step = t.toFixed(16);
                                    }
                                ),
                                this.connect(
                                    this.model.properties.value.change,
                                    function () {
                                        var t = e.model,
                                            n = t.value,
                                            i = t.step;
                                        e.input_el.value = n.toFixed(c(i));
                                    }
                                ),
                                this.connect(
                                    this.model.properties.disabled.change,
                                    function () {
                                        e.input_el.disabled = e.model.disabled;
                                    }
                                );
                        }),
                        (e.prototype.render = function () {
                            var e = this;
                            t.prototype.render.call(this),
                                (this.input_el = r.input({
                                    type: "number",
                                    class: "bk-input",
                                    name: this.model.name,
                                    min: this.model.low,
                                    max: this.model.high,
                                    value: this.model.value,
                                    step: this.model.step,
                                    disabled: this.model.disabled,
                                })),
                                this.input_el.addEventListener(
                                    "change",
                                    function () {
                                        return e.change_input();
                                    }
                                ),
                                this.group_el.appendChild(this.input_el);
                        }),
                        (e.prototype.change_input = function () {
                            var e = this.model.step,
                                n = Number(this.input_el.value);
                            (this.model.value = Number(n.toFixed(c(e)))),
                                this.model.value != n &&
                                    this.model.change.emit(),
                                t.prototype.change_input.call(this);
                        }),
                        e
                    );
                })(o.InputWidgetView);
                n.SpinnerView = h;
                var d = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Spinner"),
                                (this.prototype.default_view = h),
                                this.define({
                                    value: [s.Number, 0],
                                    low: [s.Number, null],
                                    high: [s.Number, null],
                                    step: [s.Number, 1],
                                });
                        }),
                        e
                    );
                })(o.InputWidget);
                (n.Spinner = d), d.initClass();
            },
            440: function (t, e, n) {
                var i = t(400),
                    o = t(427),
                    r = t(5),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.properties.name.change,
                                        function () {
                                            return (e.input_el.name =
                                                e.model.name || "");
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.value.change,
                                        function () {
                                            return (e.input_el.value =
                                                e.model.value);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.disabled.change,
                                        function () {
                                            return (e.input_el.disabled =
                                                e.model.disabled);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.placeholder
                                            .change,
                                        function () {
                                            return (e.input_el.placeholder =
                                                e.model.placeholder);
                                        }
                                    );
                            }),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this),
                                    (this.input_el = r.input({
                                        type: "text",
                                        class: "bk-input",
                                        name: this.model.name,
                                        value: this.model.value,
                                        disabled: this.model.disabled,
                                        placeholder: this.model.placeholder,
                                    })),
                                    this.input_el.addEventListener(
                                        "change",
                                        function () {
                                            return e.change_input();
                                        }
                                    ),
                                    this.group_el.appendChild(this.input_el);
                            }),
                            (e.prototype.change_input = function () {
                                (this.model.value = this.input_el.value),
                                    t.prototype.change_input.call(this);
                            }),
                            e
                        );
                    })(o.InputWidgetView);
                n.TextInputView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "TextInput"),
                                (this.prototype.default_view = a),
                                this.define({
                                    value: [s.String, ""],
                                    placeholder: [s.String, ""],
                                });
                        }),
                        e
                    );
                })(o.InputWidget);
                (n.TextInput = l), l.initClass();
            },
            441: function (t, e, n) {
                var i = t(400),
                    o = t(440),
                    r = t(427),
                    s = t(5),
                    a = t(18),
                    l = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.properties.name.change,
                                        function () {
                                            return (e.input_el.name =
                                                e.model.name || "");
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.value.change,
                                        function () {
                                            return (e.input_el.value =
                                                e.model.value);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.disabled.change,
                                        function () {
                                            return (e.input_el.disabled =
                                                e.model.disabled);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.placeholder
                                            .change,
                                        function () {
                                            return (e.input_el.placeholder =
                                                e.model.placeholder);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.rows.change,
                                        function () {
                                            return (e.input_el.rows =
                                                e.model.rows);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.cols.change,
                                        function () {
                                            return (e.input_el.cols =
                                                e.model.cols);
                                        }
                                    ),
                                    this.connect(
                                        this.model.properties.max_length.change,
                                        function () {
                                            return (e.input_el.maxLength =
                                                e.model.max_length);
                                        }
                                    );
                            }),
                            (e.prototype.render = function () {
                                var e = this;
                                t.prototype.render.call(this),
                                    (this.input_el = s.textarea({
                                        class: "bk-input",
                                        name: this.model.name,
                                        disabled: this.model.disabled,
                                        placeholder: this.model.placeholder,
                                        cols: this.model.cols,
                                        rows: this.model.rows,
                                        maxLength: this.model.max_length,
                                    })),
                                    (this.input_el.textContent = this.model.value),
                                    this.input_el.addEventListener(
                                        "change",
                                        function () {
                                            return e.change_input();
                                        }
                                    ),
                                    this.group_el.appendChild(this.input_el);
                            }),
                            (e.prototype.change_input = function () {
                                (this.model.value = this.input_el.value),
                                    t.prototype.change_input.call(this);
                            }),
                            e
                        );
                    })(r.InputWidgetView);
                n.TextAreaInputView = l;
                var u = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "TextAreaInput"),
                                (this.prototype.default_view = l),
                                this.define({
                                    cols: [a.Number, 20],
                                    rows: [a.Number, 2],
                                    max_length: [a.Number, 500],
                                });
                        }),
                        e
                    );
                })(o.TextInput);
                (n.TextAreaInput = u), u.initClass();
            },
            442: function (t, e, n) {
                var i = t(400),
                    o = t(410),
                    r = t(5),
                    s = t(18),
                    a = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype.connect_signals = function () {
                                var e = this;
                                t.prototype.connect_signals.call(this),
                                    this.connect(
                                        this.model.properties.active.change,
                                        function () {
                                            return e._update_active();
                                        }
                                    );
                            }),
                            (e.prototype.render = function () {
                                t.prototype.render.call(this),
                                    this._update_active();
                            }),
                            (e.prototype.click = function () {
                                (this.model.active = !this.model.active),
                                    t.prototype.click.call(this);
                            }),
                            (e.prototype._update_active = function () {
                                r.classes(this.button_el).toggle(
                                    "bk-active",
                                    this.model.active
                                );
                            }),
                            e
                        );
                    })(o.AbstractButtonView);
                n.ToggleView = a;
                var l = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Toggle"),
                                (this.prototype.default_view = a),
                                this.define({ active: [s.Boolean, !1] }),
                                this.override({ label: "Toggle" });
                        }),
                        e
                    );
                })(o.AbstractButton);
                (n.Toggle = l), l.initClass();
            },
            453: function (t, e, n) {
                var i = t(400),
                    o = t(161),
                    r = t(18),
                    s = (function (t) {
                        function e() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            i.__extends(e, t),
                            (e.prototype._width_policy = function () {
                                return "horizontal" == this.model.orientation
                                    ? t.prototype._width_policy.call(this)
                                    : "fixed";
                            }),
                            (e.prototype._height_policy = function () {
                                return "horizontal" == this.model.orientation
                                    ? "fixed"
                                    : t.prototype._height_policy.call(this);
                            }),
                            (e.prototype.box_sizing = function () {
                                var e = t.prototype.box_sizing.call(this);
                                return (
                                    "horizontal" == this.model.orientation
                                        ? null == e.width &&
                                          (e.width = this.model.default_size)
                                        : null == e.height &&
                                          (e.height = this.model.default_size),
                                    e
                                );
                            }),
                            e
                        );
                    })(o.HTMLBoxView);
                n.WidgetView = s;
                var a = (function (t) {
                    function e(e) {
                        return t.call(this, e) || this;
                    }
                    return (
                        i.__extends(e, t),
                        (e.initClass = function () {
                            (this.prototype.type = "Widget"),
                                this.define({
                                    orientation: [r.Orientation, "horizontal"],
                                    default_size: [r.Number, 300],
                                }),
                                this.override({ margin: [5, 5, 5, 5] });
                        }),
                        e
                    );
                })(o.HTMLBox);
                (n.Widget = a), a.initClass();
            },
            444: function (t, e, n) {
                /*! nouislider - 10.1.0 - 2017-07-28 17:11:18 */ var i;
                (i = function () {
                    "use strict";
                    var t = "10.1.0";
                    function e(t) {
                        t.preventDefault();
                    }
                    function n(t) {
                        return "number" == typeof t && !isNaN(t) && isFinite(t);
                    }
                    function i(t, e, n) {
                        n > 0 &&
                            (s(t, e),
                            setTimeout(function () {
                                a(t, e);
                            }, n));
                    }
                    function o(t) {
                        return Array.isArray(t) ? t : [t];
                    }
                    function r(t) {
                        var e = (t = String(t)).split(".");
                        return e.length > 1 ? e[1].length : 0;
                    }
                    function s(t, e) {
                        t.classList
                            ? t.classList.add(e)
                            : (t.className += " " + e);
                    }
                    function a(t, e) {
                        t.classList
                            ? t.classList.remove(e)
                            : (t.className = t.className.replace(
                                  new RegExp(
                                      "(^|\\b)" +
                                          e.split(" ").join("|") +
                                          "(\\b|$)",
                                      "gi"
                                  ),
                                  " "
                              ));
                    }
                    function l(t) {
                        var e = void 0 !== window.pageXOffset,
                            n = "CSS1Compat" === (t.compatMode || ""),
                            i = e
                                ? window.pageXOffset
                                : n
                                ? t.documentElement.scrollLeft
                                : t.body.scrollLeft,
                            o = e
                                ? window.pageYOffset
                                : n
                                ? t.documentElement.scrollTop
                                : t.body.scrollTop;
                        return { x: i, y: o };
                    }
                    function u(t, e) {
                        return 100 / (e - t);
                    }
                    function c(t, e) {
                        return (100 * e) / (t[1] - t[0]);
                    }
                    function h(t, e) {
                        for (var n = 1; t >= e[n]; ) n += 1;
                        return n;
                    }
                    function d(t, e, n) {
                        if (n >= t.slice(-1)[0]) return 100;
                        var i,
                            o,
                            r,
                            s,
                            a = h(n, t);
                        return (
                            (i = t[a - 1]),
                            (o = t[a]),
                            (r = e[a - 1]),
                            (s = e[a]),
                            r +
                                (function (t, e) {
                                    return c(
                                        t,
                                        t[0] < 0 ? e + Math.abs(t[0]) : e - t[0]
                                    );
                                })([i, o], n) /
                                    u(r, s)
                        );
                    }
                    function p(t, e, n, i) {
                        if (100 === i) return i;
                        var o,
                            r,
                            s = h(i, t);
                        return n
                            ? ((o = t[s - 1]),
                              (r = t[s]),
                              i - o > (r - o) / 2 ? r : o)
                            : e[s - 1]
                            ? t[s - 1] +
                              (function (t, e) {
                                  return Math.round(t / e) * e;
                              })(i - t[s - 1], e[s - 1])
                            : i;
                    }
                    function f(e, i, o) {
                        var r;
                        if (
                            ("number" == typeof i && (i = [i]),
                            "[object Array]" !==
                                Object.prototype.toString.call(i))
                        )
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'range' contains invalid value."
                            );
                        if (
                            !n(
                                (r =
                                    "min" === e
                                        ? 0
                                        : "max" === e
                                        ? 100
                                        : parseFloat(e))
                            ) ||
                            !n(i[0])
                        )
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'range' value isn't numeric."
                            );
                        o.xPct.push(r),
                            o.xVal.push(i[0]),
                            r
                                ? o.xSteps.push(!isNaN(i[1]) && i[1])
                                : isNaN(i[1]) || (o.xSteps[0] = i[1]),
                            o.xHighestCompleteStep.push(0);
                    }
                    function m(t, e, n) {
                        if (!e) return !0;
                        n.xSteps[t] =
                            c([n.xVal[t], n.xVal[t + 1]], e) /
                            u(n.xPct[t], n.xPct[t + 1]);
                        var i = (n.xVal[t + 1] - n.xVal[t]) / n.xNumSteps[t],
                            o = Math.ceil(Number(i.toFixed(3)) - 1),
                            r = n.xVal[t] + n.xNumSteps[t] * o;
                        n.xHighestCompleteStep[t] = r;
                    }
                    function g(t, e, n) {
                        (this.xPct = []),
                            (this.xVal = []),
                            (this.xSteps = [n || !1]),
                            (this.xNumSteps = [!1]),
                            (this.xHighestCompleteStep = []),
                            (this.snap = e);
                        var i,
                            o = [];
                        for (i in t) t.hasOwnProperty(i) && o.push([t[i], i]);
                        for (
                            o.length && "object" == typeof o[0][0]
                                ? o.sort(function (t, e) {
                                      return t[0][0] - e[0][0];
                                  })
                                : o.sort(function (t, e) {
                                      return t[0] - e[0];
                                  }),
                                i = 0;
                            i < o.length;
                            i++
                        )
                            f(o[i][1], o[i][0], this);
                        for (
                            this.xNumSteps = this.xSteps.slice(0), i = 0;
                            i < this.xNumSteps.length;
                            i++
                        )
                            m(i, this.xNumSteps[i], this);
                    }
                    (g.prototype.getMargin = function (e) {
                        var n = this.xNumSteps[0];
                        if (n && (e / n) % 1 != 0)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'limit', 'margin' and 'padding' must be divisible by step."
                            );
                        return 2 === this.xPct.length && c(this.xVal, e);
                    }),
                        (g.prototype.toStepping = function (t) {
                            return (t = d(this.xVal, this.xPct, t));
                        }),
                        (g.prototype.fromStepping = function (t) {
                            return (function (t, e, n) {
                                if (n >= 100) return t.slice(-1)[0];
                                var i,
                                    o,
                                    r,
                                    s,
                                    a = h(n, e);
                                return (
                                    (i = t[a - 1]),
                                    (o = t[a]),
                                    (r = e[a - 1]),
                                    (s = e[a]),
                                    (function (t, e) {
                                        return (e * (t[1] - t[0])) / 100 + t[0];
                                    })([i, o], (n - r) * u(r, s))
                                );
                            })(this.xVal, this.xPct, t);
                        }),
                        (g.prototype.getStep = function (t) {
                            return (t = p(
                                this.xPct,
                                this.xSteps,
                                this.snap,
                                t
                            ));
                        }),
                        (g.prototype.getNearbySteps = function (t) {
                            var e = h(t, this.xPct);
                            return {
                                stepBefore: {
                                    startValue: this.xVal[e - 2],
                                    step: this.xNumSteps[e - 2],
                                    highestStep: this.xHighestCompleteStep[
                                        e - 2
                                    ],
                                },
                                thisStep: {
                                    startValue: this.xVal[e - 1],
                                    step: this.xNumSteps[e - 1],
                                    highestStep: this.xHighestCompleteStep[
                                        e - 1
                                    ],
                                },
                                stepAfter: {
                                    startValue: this.xVal[e - 0],
                                    step: this.xNumSteps[e - 0],
                                    highestStep: this.xHighestCompleteStep[
                                        e - 0
                                    ],
                                },
                            };
                        }),
                        (g.prototype.countStepDecimals = function () {
                            var t = this.xNumSteps.map(r);
                            return Math.max.apply(null, t);
                        }),
                        (g.prototype.convert = function (t) {
                            return this.getStep(this.toStepping(t));
                        });
                    var v = {
                        to: function (t) {
                            return void 0 !== t && t.toFixed(2);
                        },
                        from: Number,
                    };
                    function _(e) {
                        if (
                            (function (t) {
                                return (
                                    "object" == typeof t &&
                                    "function" == typeof t.to &&
                                    "function" == typeof t.from
                                );
                            })(e)
                        )
                            return !0;
                        throw new Error(
                            "noUiSlider (" +
                                t +
                                "): 'format' requires 'to' and 'from' methods."
                        );
                    }
                    function y(e, i) {
                        if (!n(i))
                            throw new Error(
                                "noUiSlider (" + t + "): 'step' is not numeric."
                            );
                        e.singleStep = i;
                    }
                    function b(e, n) {
                        if ("object" != typeof n || Array.isArray(n))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'range' is not an object."
                            );
                        if (void 0 === n.min || void 0 === n.max)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): Missing 'min' or 'max' in 'range'."
                            );
                        if (n.min === n.max)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'range' 'min' and 'max' cannot be equal."
                            );
                        e.spectrum = new g(n, e.snap, e.singleStep);
                    }
                    function w(e, n) {
                        if (((n = o(n)), !Array.isArray(n) || !n.length))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'start' option is incorrect."
                            );
                        (e.handles = n.length), (e.start = n);
                    }
                    function x(e, n) {
                        if (((e.snap = n), "boolean" != typeof n))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'snap' option must be a boolean."
                            );
                    }
                    function k(e, n) {
                        if (((e.animate = n), "boolean" != typeof n))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'animate' option must be a boolean."
                            );
                    }
                    function S(e, n) {
                        if (((e.animationDuration = n), "number" != typeof n))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'animationDuration' option must be a number."
                            );
                    }
                    function C(e, n) {
                        var i,
                            o = [!1];
                        if (
                            ("lower" === n
                                ? (n = [!0, !1])
                                : "upper" === n && (n = [!1, !0]),
                            !0 === n || !1 === n)
                        ) {
                            for (i = 1; i < e.handles; i++) o.push(n);
                            o.push(!1);
                        } else {
                            if (
                                !Array.isArray(n) ||
                                !n.length ||
                                n.length !== e.handles + 1
                            )
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): 'connect' option doesn't match handle count."
                                );
                            o = n;
                        }
                        e.connect = o;
                    }
                    function D(e, n) {
                        switch (n) {
                            case "horizontal":
                                e.ort = 0;
                                break;
                            case "vertical":
                                e.ort = 1;
                                break;
                            default:
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): 'orientation' option is invalid."
                                );
                        }
                    }
                    function E(e, i) {
                        if (!n(i))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'margin' option must be numeric."
                            );
                        if (
                            0 !== i &&
                            ((e.margin = e.spectrum.getMargin(i)), !e.margin)
                        )
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'margin' option is only supported on linear sliders."
                            );
                    }
                    function M(e, i) {
                        if (!n(i))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'limit' option must be numeric."
                            );
                        if (
                            ((e.limit = e.spectrum.getMargin(i)),
                            !e.limit || e.handles < 2)
                        )
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'limit' option is only supported on linear sliders with 2 or more handles."
                            );
                    }
                    function A(e, i) {
                        if (!n(i))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'padding' option must be numeric."
                            );
                        if (0 !== i) {
                            if (
                                ((e.padding = e.spectrum.getMargin(i)),
                                !e.padding)
                            )
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): 'padding' option is only supported on linear sliders."
                                );
                            if (e.padding < 0)
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): 'padding' option must be a positive number."
                                );
                            if (e.padding >= 50)
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): 'padding' option must be less than half the range."
                                );
                        }
                    }
                    function N(e, n) {
                        switch (n) {
                            case "ltr":
                                e.dir = 0;
                                break;
                            case "rtl":
                                e.dir = 1;
                                break;
                            default:
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): 'direction' option was not recognized."
                                );
                        }
                    }
                    function V(e, n) {
                        if ("string" != typeof n)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'behaviour' must be a string containing options."
                            );
                        var i = n.indexOf("tap") >= 0,
                            o = n.indexOf("drag") >= 0,
                            r = n.indexOf("fixed") >= 0,
                            s = n.indexOf("snap") >= 0,
                            a = n.indexOf("hover") >= 0;
                        if (r) {
                            if (2 !== e.handles)
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): 'fixed' behaviour must be used with 2 handles"
                                );
                            E(e, e.start[1] - e.start[0]);
                        }
                        e.events = {
                            tap: i || s,
                            drag: o,
                            fixed: r,
                            snap: s,
                            hover: a,
                        };
                    }
                    function I(e, n) {
                        if (((e.multitouch = n), "boolean" != typeof n))
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'multitouch' option must be a boolean."
                            );
                    }
                    function T(e, n) {
                        if (!1 !== n)
                            if (!0 === n) {
                                e.tooltips = [];
                                for (var i = 0; i < e.handles; i++)
                                    e.tooltips.push(!0);
                            } else {
                                if (
                                    ((e.tooltips = o(n)),
                                    e.tooltips.length !== e.handles)
                                )
                                    throw new Error(
                                        "noUiSlider (" +
                                            t +
                                            "): must pass a formatter for all handles."
                                    );
                                e.tooltips.forEach(function (e) {
                                    if (
                                        "boolean" != typeof e &&
                                        ("object" != typeof e ||
                                            "function" != typeof e.to)
                                    )
                                        throw new Error(
                                            "noUiSlider (" +
                                                t +
                                                "): 'tooltips' must be passed a formatter or 'false'."
                                        );
                                });
                            }
                    }
                    function P(t, e) {
                        (t.ariaFormat = e), _(e);
                    }
                    function R(t, e) {
                        (t.format = e), _(e);
                    }
                    function O(e, n) {
                        if (void 0 !== n && "string" != typeof n && !1 !== n)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'cssPrefix' must be a string or `false`."
                            );
                        e.cssPrefix = n;
                    }
                    function B(e, n) {
                        if (void 0 !== n && "object" != typeof n)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'cssClasses' must be an object."
                            );
                        if ("string" == typeof e.cssPrefix)
                            for (var i in ((e.cssClasses = {}), n))
                                n.hasOwnProperty(i) &&
                                    (e.cssClasses[i] = e.cssPrefix + n[i]);
                        else e.cssClasses = n;
                    }
                    function L(e, n) {
                        if (!0 !== n && !1 !== n)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): 'useRequestAnimationFrame' option should be true (default) or false."
                            );
                        e.useRequestAnimationFrame = n;
                    }
                    function U(e) {
                        var n = {
                                margin: 0,
                                limit: 0,
                                padding: 0,
                                animate: !0,
                                animationDuration: 300,
                                ariaFormat: v,
                                format: v,
                            },
                            i = {
                                step: { r: !1, t: y },
                                start: { r: !0, t: w },
                                connect: { r: !0, t: C },
                                direction: { r: !0, t: N },
                                snap: { r: !1, t: x },
                                animate: { r: !1, t: k },
                                animationDuration: { r: !1, t: S },
                                range: { r: !0, t: b },
                                orientation: { r: !1, t: D },
                                margin: { r: !1, t: E },
                                limit: { r: !1, t: M },
                                padding: { r: !1, t: A },
                                behaviour: { r: !0, t: V },
                                multitouch: { r: !0, t: I },
                                ariaFormat: { r: !1, t: P },
                                format: { r: !1, t: R },
                                tooltips: { r: !1, t: T },
                                cssPrefix: { r: !1, t: O },
                                cssClasses: { r: !1, t: B },
                                useRequestAnimationFrame: { r: !1, t: L },
                            },
                            o = {
                                connect: !1,
                                direction: "ltr",
                                behaviour: "tap",
                                multitouch: !1,
                                orientation: "horizontal",
                                cssPrefix: "noUi-",
                                cssClasses: {
                                    target: "target",
                                    base: "base",
                                    origin: "origin",
                                    handle: "handle",
                                    handleLower: "handle-lower",
                                    handleUpper: "handle-upper",
                                    horizontal: "horizontal",
                                    vertical: "vertical",
                                    background: "background",
                                    connect: "connect",
                                    ltr: "ltr",
                                    rtl: "rtl",
                                    draggable: "draggable",
                                    drag: "state-drag",
                                    tap: "state-tap",
                                    active: "active",
                                    tooltip: "tooltip",
                                    pips: "pips",
                                    pipsHorizontal: "pips-horizontal",
                                    pipsVertical: "pips-vertical",
                                    marker: "marker",
                                    markerHorizontal: "marker-horizontal",
                                    markerVertical: "marker-vertical",
                                    markerNormal: "marker-normal",
                                    markerLarge: "marker-large",
                                    markerSub: "marker-sub",
                                    value: "value",
                                    valueHorizontal: "value-horizontal",
                                    valueVertical: "value-vertical",
                                    valueNormal: "value-normal",
                                    valueLarge: "value-large",
                                    valueSub: "value-sub",
                                },
                                useRequestAnimationFrame: !0,
                            };
                        e.format && !e.ariaFormat && (e.ariaFormat = e.format),
                            Object.keys(i).forEach(function (r) {
                                if (void 0 === e[r] && void 0 === o[r]) {
                                    if (i[r].r)
                                        throw new Error(
                                            "noUiSlider (" +
                                                t +
                                                "): '" +
                                                r +
                                                "' is required."
                                        );
                                    return !0;
                                }
                                i[r].t(n, void 0 === e[r] ? o[r] : e[r]);
                            }),
                            (n.pips = e.pips);
                        var r = [
                            ["left", "top"],
                            ["right", "bottom"],
                        ];
                        return (
                            (n.style = r[n.dir][n.ort]),
                            (n.styleOposite = r[n.dir ? 0 : 1][n.ort]),
                            n
                        );
                    }
                    function W(n, r, u) {
                        var c,
                            h,
                            d,
                            p,
                            f,
                            m,
                            g,
                            v = window.navigator.pointerEnabled
                                ? {
                                      start: "pointerdown",
                                      move: "pointermove",
                                      end: "pointerup",
                                  }
                                : window.navigator.msPointerEnabled
                                ? {
                                      start: "MSPointerDown",
                                      move: "MSPointerMove",
                                      end: "MSPointerUp",
                                  }
                                : {
                                      start: "mousedown touchstart",
                                      move: "mousemove touchmove",
                                      end: "mouseup touchend",
                                  },
                            _ =
                                window.CSS &&
                                CSS.supports &&
                                CSS.supports("touch-action", "none"),
                            y =
                                _ &&
                                (function () {
                                    var t = !1;
                                    try {
                                        var e = Object.defineProperty(
                                            {},
                                            "passive",
                                            {
                                                get: function () {
                                                    t = !0;
                                                },
                                            }
                                        );
                                        window.addEventListener(
                                            "test",
                                            null,
                                            e
                                        );
                                    } catch (t) {}
                                    return t;
                                })(),
                            b = n,
                            w = [],
                            x = [],
                            k = 0,
                            S = r.spectrum,
                            C = [],
                            D = {},
                            E = n.ownerDocument,
                            M = E.documentElement,
                            A = E.body;
                        function N(t, e) {
                            var n = E.createElement("div");
                            return e && s(n, e), t.appendChild(n), n;
                        }
                        function V(t, e) {
                            var n = N(t, r.cssClasses.origin),
                                i = N(n, r.cssClasses.handle);
                            return (
                                i.setAttribute("data-handle", e),
                                i.setAttribute("tabindex", "0"),
                                i.setAttribute("role", "slider"),
                                i.setAttribute(
                                    "aria-orientation",
                                    r.ort ? "vertical" : "horizontal"
                                ),
                                0 === e
                                    ? s(i, r.cssClasses.handleLower)
                                    : e === r.handles - 1 &&
                                      s(i, r.cssClasses.handleUpper),
                                n
                            );
                        }
                        function I(t, e) {
                            return !!e && N(t, r.cssClasses.connect);
                        }
                        function T(t, e) {
                            return (
                                !!r.tooltips[e] &&
                                N(t.firstChild, r.cssClasses.tooltip)
                            );
                        }
                        function P(t, e, n) {
                            var i = E.createElement("div"),
                                o = [
                                    r.cssClasses.valueNormal,
                                    r.cssClasses.valueLarge,
                                    r.cssClasses.valueSub,
                                ],
                                a = [
                                    r.cssClasses.markerNormal,
                                    r.cssClasses.markerLarge,
                                    r.cssClasses.markerSub,
                                ],
                                l = [
                                    r.cssClasses.valueHorizontal,
                                    r.cssClasses.valueVertical,
                                ],
                                u = [
                                    r.cssClasses.markerHorizontal,
                                    r.cssClasses.markerVertical,
                                ];
                            function c(t, e) {
                                var n = e === r.cssClasses.value,
                                    i = n ? l : u,
                                    s = n ? o : a;
                                return e + " " + i[r.ort] + " " + s[t];
                            }
                            return (
                                s(i, r.cssClasses.pips),
                                s(
                                    i,
                                    0 === r.ort
                                        ? r.cssClasses.pipsHorizontal
                                        : r.cssClasses.pipsVertical
                                ),
                                Object.keys(t).forEach(function (o) {
                                    !(function (t, o) {
                                        o[1] = o[1] && e ? e(o[0], o[1]) : o[1];
                                        var s = N(i, !1);
                                        (s.className = c(
                                            o[1],
                                            r.cssClasses.marker
                                        )),
                                            (s.style[r.style] = t + "%"),
                                            o[1] &&
                                                (((s = N(i, !1)).className = c(
                                                    o[1],
                                                    r.cssClasses.value
                                                )),
                                                (s.style[r.style] = t + "%"),
                                                (s.innerText = n.to(o[0])));
                                    })(o, t[o]);
                                }),
                                i
                            );
                        }
                        function R() {
                            var t;
                            f &&
                                ((t = f).parentElement.removeChild(t),
                                (f = null));
                        }
                        function O(e) {
                            R();
                            var n = e.mode,
                                i = e.density || 1,
                                o = e.filter || !1,
                                r = e.values || !1,
                                s = e.stepped || !1,
                                a = (function (e, n, i) {
                                    if ("range" === e || "steps" === e)
                                        return S.xVal;
                                    if ("count" === e) {
                                        if (!n)
                                            throw new Error(
                                                "noUiSlider (" +
                                                    t +
                                                    "): 'values' required for mode 'count'."
                                            );
                                        var o,
                                            r = 100 / (n - 1),
                                            s = 0;
                                        for (n = []; (o = s++ * r) <= 100; )
                                            n.push(o);
                                        e = "positions";
                                    }
                                    return "positions" === e
                                        ? n.map(function (t) {
                                              return S.fromStepping(
                                                  i ? S.getStep(t) : t
                                              );
                                          })
                                        : "values" === e
                                        ? i
                                            ? n.map(function (t) {
                                                  return S.fromStepping(
                                                      S.getStep(S.toStepping(t))
                                                  );
                                              })
                                            : n
                                        : void 0;
                                })(n, r, s),
                                l = (function (t, e, n) {
                                    var i,
                                        o = {},
                                        r = S.xVal[0],
                                        s = S.xVal[S.xVal.length - 1],
                                        a = !1,
                                        l = !1,
                                        u = 0;
                                    return (
                                        ((i = n.slice().sort(function (t, e) {
                                            return t - e;
                                        })),
                                        (n = i.filter(function (t) {
                                            return !this[t] && (this[t] = !0);
                                        }, {})))[0] !== r &&
                                            (n.unshift(r), (a = !0)),
                                        n[n.length - 1] !== s &&
                                            (n.push(s), (l = !0)),
                                        n.forEach(function (i, r) {
                                            var s,
                                                c,
                                                h,
                                                d,
                                                p,
                                                f,
                                                m,
                                                g,
                                                v,
                                                _ = i,
                                                y = n[r + 1];
                                            if (
                                                ("steps" === e &&
                                                    (s = S.xNumSteps[r]),
                                                s || (s = y - _),
                                                !1 !== _ && void 0 !== y)
                                            )
                                                for (
                                                    s = Math.max(s, 1e-7),
                                                        c = _;
                                                    c <= y;
                                                    c = (c + s).toFixed(7) / 1
                                                ) {
                                                    for (
                                                        m =
                                                            (p =
                                                                (d = S.toStepping(
                                                                    c
                                                                )) - u) / t,
                                                            v =
                                                                p /
                                                                (g = Math.round(
                                                                    m
                                                                )),
                                                            h = 1;
                                                        h <= g;
                                                        h += 1
                                                    )
                                                        o[
                                                            (u + h * v).toFixed(
                                                                5
                                                            )
                                                        ] = ["x", 0];
                                                    (f =
                                                        n.indexOf(c) > -1
                                                            ? 1
                                                            : "steps" === e
                                                            ? 2
                                                            : 0),
                                                        !r && a && (f = 0),
                                                        (c === y && l) ||
                                                            (o[d.toFixed(5)] = [
                                                                c,
                                                                f,
                                                            ]),
                                                        (u = d);
                                                }
                                        }),
                                        o
                                    );
                                })(i, n, a),
                                u = e.format || { to: Math.round };
                            return (f = b.appendChild(P(l, o, u)));
                        }
                        function B() {
                            var t = c.getBoundingClientRect(),
                                e = "offset" + ["Width", "Height"][r.ort];
                            return 0 === r.ort
                                ? t.width || c[e]
                                : t.height || c[e];
                        }
                        function L(t, e, n, i) {
                            var o = function (o) {
                                    return (
                                        !b.hasAttribute("disabled") &&
                                        ((s = b),
                                        (a = r.cssClasses.tap),
                                        (s.classList
                                            ? !s.classList.contains(a)
                                            : !new RegExp(
                                                  "\\b" + a + "\\b"
                                              ).test(s.className)) &&
                                            !!(o = (function (t, e, n) {
                                                var i,
                                                    o,
                                                    s =
                                                        0 ===
                                                        t.type.indexOf("touch"),
                                                    a =
                                                        0 ===
                                                        t.type.indexOf("mouse"),
                                                    u =
                                                        0 ===
                                                        t.type.indexOf(
                                                            "pointer"
                                                        );
                                                if (
                                                    (0 ===
                                                        t.type.indexOf(
                                                            "MSPointer"
                                                        ) && (u = !0),
                                                    s && r.multitouch)
                                                ) {
                                                    var c = function (t) {
                                                        return (
                                                            t.target === n ||
                                                            n.contains(t.target)
                                                        );
                                                    };
                                                    if (
                                                        "touchstart" === t.type
                                                    ) {
                                                        var h = Array.prototype.filter.call(
                                                            t.touches,
                                                            c
                                                        );
                                                        if (h.length > 1)
                                                            return !1;
                                                        (i = h[0].pageX),
                                                            (o = h[0].pageY);
                                                    } else {
                                                        var d = Array.prototype.find.call(
                                                            t.changedTouches,
                                                            c
                                                        );
                                                        if (!d) return !1;
                                                        (i = d.pageX),
                                                            (o = d.pageY);
                                                    }
                                                } else if (s) {
                                                    if (t.touches.length > 1)
                                                        return !1;
                                                    (i =
                                                        t.changedTouches[0]
                                                            .pageX),
                                                        (o =
                                                            t.changedTouches[0]
                                                                .pageY);
                                                }
                                                return (
                                                    (e = e || l(E)),
                                                    (a || u) &&
                                                        ((i = t.clientX + e.x),
                                                        (o = t.clientY + e.y)),
                                                    (t.pageOffset = e),
                                                    (t.points = [i, o]),
                                                    (t.cursor = a || u),
                                                    t
                                                );
                                            })(
                                                o,
                                                i.pageOffset,
                                                i.target || e
                                            )) &&
                                            !(
                                                t === v.start &&
                                                void 0 !== o.buttons &&
                                                o.buttons > 1
                                            ) &&
                                            (!i.hover || !o.buttons) &&
                                            (y || o.preventDefault(),
                                            (o.calcPoint = o.points[r.ort]),
                                            void n(o, i)))
                                    );
                                    var s, a;
                                },
                                s = [];
                            return (
                                t.split(" ").forEach(function (t) {
                                    e.addEventListener(
                                        t,
                                        o,
                                        !!y && { passive: !0 }
                                    ),
                                        s.push([t, o]);
                                }),
                                s
                            );
                        }
                        function W(t) {
                            var e,
                                n,
                                i,
                                o,
                                s,
                                a,
                                u =
                                    t -
                                    ((e = c),
                                    (n = r.ort),
                                    (i = e.getBoundingClientRect()),
                                    (o = e.ownerDocument),
                                    (s = o.documentElement),
                                    (a = l(o)),
                                    /webkit.*Chrome.*Mobile/i.test(
                                        navigator.userAgent
                                    ) && (a.x = 0),
                                    n
                                        ? i.top + a.y - s.clientTop
                                        : i.left + a.x - s.clientLeft),
                                h = (100 * u) / B();
                            return r.dir ? 100 - h : h;
                        }
                        function F(t, e, n, i) {
                            var o = n.slice(),
                                r = [!t, t],
                                s = [t, !t];
                            (i = i.slice()),
                                t && i.reverse(),
                                i.length > 1
                                    ? i.forEach(function (t, n) {
                                          var i = K(
                                              o,
                                              t,
                                              o[t] + e,
                                              r[n],
                                              s[n],
                                              !1
                                          );
                                          !1 === i
                                              ? (e = 0)
                                              : ((e = i - o[t]), (o[t] = i));
                                      })
                                    : (r = s = [!0]);
                            var a = !1;
                            i.forEach(function (t, i) {
                                a = Q(t, n[t] + e, r[i], s[i]) || a;
                            }),
                                a &&
                                    i.forEach(function (t) {
                                        j("update", t), j("slide", t);
                                    });
                        }
                        function j(t, e, n) {
                            Object.keys(D).forEach(function (i) {
                                var o = i.split(".")[0];
                                t === o &&
                                    D[i].forEach(function (t) {
                                        t.call(
                                            p,
                                            C.map(r.format.to),
                                            e,
                                            C.slice(),
                                            n || !1,
                                            w.slice()
                                        );
                                    });
                            });
                        }
                        function z(t, e) {
                            "mouseout" === t.type &&
                                "HTML" === t.target.nodeName &&
                                null === t.relatedTarget &&
                                H(t, e);
                        }
                        function Y(t, e) {
                            if (
                                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                                0 === t.buttons &&
                                0 !== e.buttonsProperty
                            )
                                return H(t, e);
                            var n =
                                    (r.dir ? -1 : 1) *
                                    (t.calcPoint - e.startCalcPoint),
                                i = (100 * n) / e.baseSize;
                            F(n > 0, i, e.locations, e.handleNumbers);
                        }
                        function H(t, n) {
                            n.handle &&
                                (a(n.handle, r.cssClasses.active), (k -= 1)),
                                n.listeners.forEach(function (t) {
                                    M.removeEventListener(t[0], t[1]);
                                }),
                                0 === k &&
                                    (a(b, r.cssClasses.drag),
                                    $(),
                                    t.cursor &&
                                        ((A.style.cursor = ""),
                                        A.removeEventListener(
                                            "selectstart",
                                            e
                                        ))),
                                n.handleNumbers.forEach(function (t) {
                                    j("change", t), j("set", t), j("end", t);
                                });
                        }
                        function G(t, n) {
                            var i;
                            if (1 === n.handleNumbers.length) {
                                var o = h[n.handleNumbers[0]];
                                if (o.hasAttribute("disabled")) return !1;
                                (i = o.children[0]),
                                    (k += 1),
                                    s(i, r.cssClasses.active);
                            }
                            t.stopPropagation();
                            var a = [],
                                l = L(v.move, M, Y, {
                                    target: t.target,
                                    handle: i,
                                    listeners: a,
                                    startCalcPoint: t.calcPoint,
                                    baseSize: B(),
                                    pageOffset: t.pageOffset,
                                    handleNumbers: n.handleNumbers,
                                    buttonsProperty: t.buttons,
                                    locations: w.slice(),
                                }),
                                u = L(v.end, M, H, {
                                    target: t.target,
                                    handle: i,
                                    listeners: a,
                                    handleNumbers: n.handleNumbers,
                                }),
                                c = L("mouseout", M, z, {
                                    target: t.target,
                                    handle: i,
                                    listeners: a,
                                    handleNumbers: n.handleNumbers,
                                });
                            a.push.apply(a, l.concat(u, c)),
                                t.cursor &&
                                    ((A.style.cursor = getComputedStyle(
                                        t.target
                                    ).cursor),
                                    h.length > 1 && s(b, r.cssClasses.drag),
                                    A.addEventListener("selectstart", e, !1)),
                                n.handleNumbers.forEach(function (t) {
                                    j("start", t);
                                });
                        }
                        function q(t) {
                            t.stopPropagation();
                            var e = W(t.calcPoint),
                                n = (function (t) {
                                    var e = 100,
                                        n = !1;
                                    return (
                                        h.forEach(function (i, o) {
                                            if (!i.hasAttribute("disabled")) {
                                                var r = Math.abs(w[o] - t);
                                                r < e && ((n = o), (e = r));
                                            }
                                        }),
                                        n
                                    );
                                })(e);
                            if (!1 === n) return !1;
                            r.events.snap ||
                                i(b, r.cssClasses.tap, r.animationDuration),
                                Q(n, e, !0, !0),
                                $(),
                                j("slide", n, !0),
                                j("update", n, !0),
                                j("change", n, !0),
                                j("set", n, !0),
                                r.events.snap && G(t, { handleNumbers: [n] });
                        }
                        function X(t) {
                            var e = W(t.calcPoint),
                                n = S.getStep(e),
                                i = S.fromStepping(n);
                            Object.keys(D).forEach(function (t) {
                                "hover" === t.split(".")[0] &&
                                    D[t].forEach(function (t) {
                                        t.call(p, i);
                                    });
                            });
                        }
                        function K(t, e, n, i, o, s) {
                            var a;
                            return (
                                h.length > 1 &&
                                    (i &&
                                        e > 0 &&
                                        (n = Math.max(n, t[e - 1] + r.margin)),
                                    o &&
                                        e < h.length - 1 &&
                                        (n = Math.min(n, t[e + 1] - r.margin))),
                                h.length > 1 &&
                                    r.limit &&
                                    (i &&
                                        e > 0 &&
                                        (n = Math.min(n, t[e - 1] + r.limit)),
                                    o &&
                                        e < h.length - 1 &&
                                        (n = Math.max(n, t[e + 1] - r.limit))),
                                r.padding &&
                                    (0 === e && (n = Math.max(n, r.padding)),
                                    e === h.length - 1 &&
                                        (n = Math.min(n, 100 - r.padding))),
                                (n = S.getStep(n)),
                                (a = n),
                                !(
                                    (n = Math.max(Math.min(a, 100), 0)) ===
                                        t[e] && !s
                                ) && n
                            );
                        }
                        function J(t) {
                            return t + "%";
                        }
                        function $() {
                            x.forEach(function (t) {
                                var e = w[t] > 50 ? -1 : 1,
                                    n = 3 + (h.length + e * t);
                                h[t].childNodes[0].style.zIndex = n;
                            });
                        }
                        function Q(t, e, n, i) {
                            return (
                                !1 !== (e = K(w, t, e, n, i, !1)) &&
                                ((function (t, e) {
                                    (w[t] = e), (C[t] = S.fromStepping(e));
                                    var n = function () {
                                        (h[t].style[r.style] = J(e)),
                                            Z(t),
                                            Z(t + 1);
                                    };
                                    window.requestAnimationFrame &&
                                    r.useRequestAnimationFrame
                                        ? window.requestAnimationFrame(n)
                                        : n();
                                })(t, e),
                                !0)
                            );
                        }
                        function Z(t) {
                            if (d[t]) {
                                var e = 0,
                                    n = 100;
                                0 !== t && (e = w[t - 1]),
                                    t !== d.length - 1 && (n = w[t]),
                                    (d[t].style[r.style] = J(e)),
                                    (d[t].style[r.styleOposite] = J(100 - n));
                            }
                        }
                        function tt(t, e) {
                            null !== t &&
                                !1 !== t &&
                                ("number" == typeof t && (t = String(t)),
                                !1 === (t = r.format.from(t)) ||
                                    isNaN(t) ||
                                    Q(e, S.toStepping(t), !1, !1));
                        }
                        function et(t, e) {
                            var n = o(t),
                                s = void 0 === w[0];
                            (e = void 0 === e || !!e),
                                n.forEach(tt),
                                r.animate &&
                                    !s &&
                                    i(b, r.cssClasses.tap, r.animationDuration),
                                x.forEach(function (t) {
                                    Q(t, w[t], !0, !1);
                                }),
                                $(),
                                x.forEach(function (t) {
                                    j("update", t),
                                        null !== n[t] && e && j("set", t);
                                });
                        }
                        function nt() {
                            var t = C.map(r.format.to);
                            return 1 === t.length ? t[0] : t;
                        }
                        function it(t, e) {
                            (D[t] = D[t] || []),
                                D[t].push(e),
                                "update" === t.split(".")[0] &&
                                    h.forEach(function (t, e) {
                                        j("update", e);
                                    });
                        }
                        if (b.noUiSlider)
                            throw new Error(
                                "noUiSlider (" +
                                    t +
                                    "): Slider was already initialized."
                            );
                        return (
                            (function (t) {
                                s(t, r.cssClasses.target),
                                    0 === r.dir
                                        ? s(t, r.cssClasses.ltr)
                                        : s(t, r.cssClasses.rtl),
                                    0 === r.ort
                                        ? s(t, r.cssClasses.horizontal)
                                        : s(t, r.cssClasses.vertical),
                                    (c = N(t, r.cssClasses.base));
                            })(b),
                            (function (t, e) {
                                (h = []), (d = []).push(I(e, t[0]));
                                for (var n = 0; n < r.handles; n++)
                                    h.push(V(e, n)),
                                        (x[n] = n),
                                        d.push(I(e, t[n + 1]));
                            })(r.connect, c),
                            (p = {
                                destroy: function () {
                                    for (var t in r.cssClasses)
                                        r.cssClasses.hasOwnProperty(t) &&
                                            a(b, r.cssClasses[t]);
                                    for (; b.firstChild; )
                                        b.removeChild(b.firstChild);
                                    delete b.noUiSlider;
                                },
                                steps: function () {
                                    return w.map(function (t, e) {
                                        var n = S.getNearbySteps(t),
                                            i = C[e],
                                            o = n.thisStep.step,
                                            r = null;
                                        !1 !== o &&
                                            i + o > n.stepAfter.startValue &&
                                            (o = n.stepAfter.startValue - i),
                                            (r =
                                                i > n.thisStep.startValue
                                                    ? n.thisStep.step
                                                    : !1 !==
                                                          n.stepBefore.step &&
                                                      i -
                                                          n.stepBefore
                                                              .highestStep),
                                            100 === t
                                                ? (o = null)
                                                : 0 === t && (r = null);
                                        var s = S.countStepDecimals();
                                        return (
                                            null !== o &&
                                                !1 !== o &&
                                                (o = Number(o.toFixed(s))),
                                            null !== r &&
                                                !1 !== r &&
                                                (r = Number(r.toFixed(s))),
                                            [r, o]
                                        );
                                    });
                                },
                                on: it,
                                off: function (t) {
                                    var e = t && t.split(".")[0],
                                        n = e && t.substring(e.length);
                                    Object.keys(D).forEach(function (t) {
                                        var i = t.split(".")[0],
                                            o = t.substring(i.length);
                                        (e && e !== i) ||
                                            (n && n !== o) ||
                                            delete D[t];
                                    });
                                },
                                get: nt,
                                set: et,
                                reset: function (t) {
                                    et(r.start, t);
                                },
                                __moveHandles: function (t, e, n) {
                                    F(t, e, w, n);
                                },
                                options: u,
                                updateOptions: function (t, e) {
                                    var n = nt(),
                                        i = [
                                            "margin",
                                            "limit",
                                            "padding",
                                            "range",
                                            "animate",
                                            "snap",
                                            "step",
                                            "format",
                                        ];
                                    i.forEach(function (e) {
                                        void 0 !== t[e] && (u[e] = t[e]);
                                    });
                                    var o = U(u);
                                    i.forEach(function (e) {
                                        void 0 !== t[e] && (r[e] = o[e]);
                                    }),
                                        (S = o.spectrum),
                                        (r.margin = o.margin),
                                        (r.limit = o.limit),
                                        (r.padding = o.padding),
                                        r.pips && O(r.pips),
                                        (w = []),
                                        et(t.start || n, e);
                                },
                                target: b,
                                removePips: R,
                                pips: O,
                            }),
                            (g = r.events).fixed ||
                                h.forEach(function (t, e) {
                                    L(v.start, t.children[0], G, {
                                        handleNumbers: [e],
                                    });
                                }),
                            g.tap && L(v.start, c, q, {}),
                            g.hover && L(v.move, c, X, { hover: !0 }),
                            g.drag &&
                                d.forEach(function (t, e) {
                                    if (
                                        !1 !== t &&
                                        0 !== e &&
                                        e !== d.length - 1
                                    ) {
                                        var n = h[e - 1],
                                            i = h[e],
                                            o = [t];
                                        s(t, r.cssClasses.draggable),
                                            g.fixed &&
                                                (o.push(n.children[0]),
                                                o.push(i.children[0])),
                                            o.forEach(function (t) {
                                                L(v.start, t, G, {
                                                    handles: [n, i],
                                                    handleNumbers: [e - 1, e],
                                                });
                                            });
                                    }
                                }),
                            et(r.start),
                            r.pips && O(r.pips),
                            r.tooltips &&
                                ((m = h.map(T)),
                                it("update", function (t, e, n) {
                                    if (m[e]) {
                                        var i = t[e];
                                        !0 !== r.tooltips[e] &&
                                            (i = r.tooltips[e].to(n[e])),
                                            (m[e].innerHTML = i);
                                    }
                                })),
                            it("update", function (t, e, n, i, o) {
                                x.forEach(function (t) {
                                    var e = h[t],
                                        i = K(w, t, 0, !0, !0, !0),
                                        s = K(w, t, 100, !0, !0, !0),
                                        a = o[t],
                                        l = r.ariaFormat.to(n[t]);
                                    e.children[0].setAttribute(
                                        "aria-valuemin",
                                        i.toFixed(1)
                                    ),
                                        e.children[0].setAttribute(
                                            "aria-valuemax",
                                            s.toFixed(1)
                                        ),
                                        e.children[0].setAttribute(
                                            "aria-valuenow",
                                            a.toFixed(1)
                                        ),
                                        e.children[0].setAttribute(
                                            "aria-valuetext",
                                            l
                                        );
                                });
                            }),
                            p
                        );
                    }
                    return {
                        version: t,
                        create: function (e, n) {
                            if (!e || !e.nodeName)
                                throw new Error(
                                    "noUiSlider (" +
                                        t +
                                        "): create requires a single element, got: " +
                                        e
                                );
                            var i = U(n),
                                o = W(e, i, n);
                            return (e.noUiSlider = o), o;
                        },
                    };
                }),
                    "object" == typeof n
                        ? (e.exports = i())
                        : (window.noUiSlider = i());
            },
            445: function (t, e, n) {
                var i = function (t, e, n, i) {
                        t.addEventListener(e, n, !!i);
                    },
                    o = function (t, e, n, i) {
                        t.removeEventListener(e, n, !!i);
                    },
                    r = function (t, e) {
                        return (
                            -1 !==
                            (" " + t.className + " ").indexOf(" " + e + " ")
                        );
                    },
                    s = function (t, e) {
                        r(t, e) ||
                            (t.className =
                                "" === t.className ? e : t.className + " " + e);
                    },
                    a = function (t, e) {
                        var n;
                        t.className = (n = (" " + t.className + " ").replace(
                            " " + e + " ",
                            " "
                        )).trim
                            ? n.trim()
                            : n.replace(/^\s+|\s+$/g, "");
                    },
                    l = function (t) {
                        return /Array/.test(Object.prototype.toString.call(t));
                    },
                    u = function (t) {
                        return (
                            /Date/.test(Object.prototype.toString.call(t)) &&
                            !isNaN(t.getTime())
                        );
                    },
                    c = function (t) {
                        var e = t.getDay();
                        return 0 === e || 6 === e;
                    },
                    h = function (t) {
                        // solution lifted from date.js (MIT license): https://github.com/datejs/Datejs
                        return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
                    },
                    d = function (t, e) {
                        return [
                            31,
                            h(t) ? 29 : 28,
                            31,
                            30,
                            31,
                            30,
                            31,
                            31,
                            30,
                            31,
                            30,
                            31,
                        ][e];
                    },
                    p = function (t) {
                        u(t) && t.setHours(0, 0, 0, 0);
                    },
                    f = function (t, e) {
                        return t.getTime() === e.getTime();
                    },
                    m = function (t, e, n) {
                        var i, o;
                        for (i in e)
                            (o = void 0 !== t[i]) &&
                            "object" == typeof e[i] &&
                            null !== e[i] &&
                            void 0 === e[i].nodeName
                                ? u(e[i])
                                    ? n && (t[i] = new Date(e[i].getTime()))
                                    : l(e[i])
                                    ? n && (t[i] = e[i].slice(0))
                                    : (t[i] = m({}, e[i], n))
                                : (!n && o) || (t[i] = e[i]);
                        return t;
                    },
                    g = function (t, e, n) {
                        var i;
                        document.createEvent
                            ? ((i = document.createEvent(
                                  "HTMLEvents"
                              )).initEvent(e, !0, !1),
                              (i = m(i, n)),
                              t.dispatchEvent(i))
                            : document.createEventObject &&
                              ((i = document.createEventObject()),
                              (i = m(i, n)),
                              t.fireEvent("on" + e, i));
                    },
                    v = function (t) {
                        return (
                            t.month < 0 &&
                                ((t.year -= Math.ceil(Math.abs(t.month) / 12)),
                                (t.month += 12)),
                            t.month > 11 &&
                                ((t.year += Math.floor(Math.abs(t.month) / 12)),
                                (t.month -= 12)),
                            t
                        );
                    },
                    _ = {
                        field: null,
                        bound: void 0,
                        ariaLabel: "Use the arrow keys to pick a date",
                        position: "bottom left",
                        reposition: !0,
                        format: "YYYY-MM-DD",
                        toString: null,
                        parse: null,
                        defaultDate: null,
                        setDefaultDate: !1,
                        firstDay: 0,
                        formatStrict: !1,
                        minDate: null,
                        maxDate: null,
                        yearRange: 10,
                        showWeekNumber: !1,
                        pickWholeWeek: !1,
                        minYear: 0,
                        maxYear: 9999,
                        minMonth: void 0,
                        maxMonth: void 0,
                        startRange: null,
                        endRange: null,
                        isRTL: !1,
                        yearSuffix: "",
                        showMonthAfterYear: !1,
                        showDaysInNextAndPreviousMonths: !1,
                        enableSelectionDaysInNextAndPreviousMonths: !1,
                        numberOfMonths: 1,
                        mainCalendar: "left",
                        container: void 0,
                        blurFieldOnSelect: !0,
                        i18n: {
                            previousMonth: "Previous Month",
                            nextMonth: "Next Month",
                            months: [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December",
                            ],
                            weekdays: [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                            ],
                            weekdaysShort: [
                                "Sun",
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                            ],
                        },
                        theme: null,
                        events: [],
                        onSelect: null,
                        onOpen: null,
                        onClose: null,
                        onDraw: null,
                        keyboardInput: !0,
                    },
                    y = function (t, e, n) {
                        for (e += t.firstDay; e >= 7; ) e -= 7;
                        return n ? t.i18n.weekdaysShort[e] : t.i18n.weekdays[e];
                    },
                    b = function (t) {
                        var e = [],
                            n = "false";
                        if (t.isEmpty) {
                            if (!t.showDaysInNextAndPreviousMonths)
                                return '<td class="is-empty"></td>';
                            e.push("is-outside-current-month"),
                                t.enableSelectionDaysInNextAndPreviousMonths ||
                                    e.push("is-selection-disabled");
                        }
                        return (
                            t.isDisabled && e.push("is-disabled"),
                            t.isToday && e.push("is-today"),
                            t.isSelected &&
                                (e.push("is-selected"), (n = "true")),
                            t.hasEvent && e.push("has-event"),
                            t.isInRange && e.push("is-inrange"),
                            t.isStartRange && e.push("is-startrange"),
                            t.isEndRange && e.push("is-endrange"),
                            '<td data-day="' +
                                t.day +
                                '" class="' +
                                e.join(" ") +
                                '" aria-selected="' +
                                n +
                                '"><button class="pika-button pika-day" type="button" data-pika-year="' +
                                t.year +
                                '" data-pika-month="' +
                                t.month +
                                '" data-pika-day="' +
                                t.day +
                                '">' +
                                t.day +
                                "</button></td>"
                        );
                    },
                    w = function (t, e, n) {
                        var i = new Date(n, e, t),
                            o = (function (t) {
                                t.setHours(0, 0, 0, 0);
                                var e = t.getDate(),
                                    n = t.getDay(),
                                    i = function (t) {
                                        return (t + 7 - 1) % 7;
                                    };
                                t.setDate(e + 3 - i(n));
                                var o = new Date(t.getFullYear(), 0, 4),
                                    r = (t.getTime() - o.getTime()) / 864e5;
                                return (
                                    1 + Math.round((r - 3 + i(o.getDay())) / 7)
                                );
                            })(i);
                        return '<td class="pika-week">' + o + "</td>";
                    },
                    x = function (t, e, n, i) {
                        return (
                            '<tr class="pika-row' +
                            (n ? " pick-whole-week" : "") +
                            (i ? " is-selected" : "") +
                            '">' +
                            (e ? t.reverse() : t).join("") +
                            "</tr>"
                        );
                    },
                    k = function (t, e, n, i, o, r) {
                        var s,
                            a,
                            u,
                            c,
                            h,
                            d = t._o,
                            p = n === d.minYear,
                            f = n === d.maxYear,
                            m =
                                '<div id="' +
                                r +
                                '" class="pika-title" role="heading" aria-live="assertive">',
                            g = !0,
                            v = !0;
                        for (u = [], s = 0; s < 12; s++)
                            u.push(
                                '<option value="' +
                                    (n === o ? s - e : 12 + s - e) +
                                    '"' +
                                    (s === i ? ' selected="selected"' : "") +
                                    ((p && s < d.minMonth) ||
                                    (f && s > d.maxMonth)
                                        ? ' disabled="disabled"'
                                        : "") +
                                    ">" +
                                    d.i18n.months[s] +
                                    "</option>"
                            );
                        for (
                            c =
                                '<div class="pika-label">' +
                                d.i18n.months[i] +
                                '<select class="pika-select pika-select-month" tabindex="-1">' +
                                u.join("") +
                                "</select></div>",
                                l(d.yearRange)
                                    ? ((s = d.yearRange[0]),
                                      (a = d.yearRange[1] + 1))
                                    : ((s = n - d.yearRange),
                                      (a = 1 + n + d.yearRange)),
                                u = [];
                            s < a && s <= d.maxYear;
                            s++
                        )
                            s >= d.minYear &&
                                u.push(
                                    '<option value="' +
                                        s +
                                        '"' +
                                        (s === n
                                            ? ' selected="selected"'
                                            : "") +
                                        ">" +
                                        s +
                                        "</option>"
                                );
                        return (
                            (h =
                                '<div class="pika-label">' +
                                n +
                                d.yearSuffix +
                                '<select class="pika-select pika-select-year" tabindex="-1">' +
                                u.join("") +
                                "</select></div>"),
                            d.showMonthAfterYear ? (m += h + c) : (m += c + h),
                            p && (0 === i || d.minMonth >= i) && (g = !1),
                            f && (11 === i || d.maxMonth <= i) && (v = !1),
                            0 === e &&
                                (m +=
                                    '<button class="pika-prev' +
                                    (g ? "" : " is-disabled") +
                                    '" type="button">' +
                                    d.i18n.previousMonth +
                                    "</button>"),
                            e === t._o.numberOfMonths - 1 &&
                                (m +=
                                    '<button class="pika-next' +
                                    (v ? "" : " is-disabled") +
                                    '" type="button">' +
                                    d.i18n.nextMonth +
                                    "</button>"),
                            (m += "</div>")
                        );
                    },
                    S = function (t, e, n) {
                        return (
                            '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' +
                            n +
                            '">' +
                            (function (t) {
                                var e,
                                    n = [];
                                for (
                                    t.showWeekNumber && n.push("<th></th>"),
                                        e = 0;
                                    e < 7;
                                    e++
                                )
                                    n.push(
                                        '<th scope="col"><abbr title="' +
                                            y(t, e) +
                                            '">' +
                                            y(t, e, !0) +
                                            "</abbr></th>"
                                    );
                                return (
                                    "<thead><tr>" +
                                    (t.isRTL ? n.reverse() : n).join("") +
                                    "</tr></thead>"
                                );
                            })(t) +
                            "<tbody>" +
                            e.join("") +
                            "</tbody></table>"
                        );
                    },
                    C = function (t) {
                        var e = this,
                            n = e.config(t);
                        (e._onMouseDown = function (t) {
                            if (e._v) {
                                var i =
                                    (t = t || window.event).target ||
                                    t.srcElement;
                                if (i)
                                    if (
                                        (r(i, "is-disabled") ||
                                            (!r(i, "pika-button") ||
                                            r(i, "is-empty") ||
                                            r(i.parentNode, "is-disabled")
                                                ? r(i, "pika-prev")
                                                    ? e.prevMonth()
                                                    : r(i, "pika-next") &&
                                                      e.nextMonth()
                                                : (e.setDate(
                                                      new Date(
                                                          i.getAttribute(
                                                              "data-pika-year"
                                                          ),
                                                          i.getAttribute(
                                                              "data-pika-month"
                                                          ),
                                                          i.getAttribute(
                                                              "data-pika-day"
                                                          )
                                                      )
                                                  ),
                                                  n.bound &&
                                                      setTimeout(function () {
                                                          e.hide(),
                                                              n.blurFieldOnSelect &&
                                                                  n.field &&
                                                                  n.field.blur();
                                                      }, 100))),
                                        r(i, "pika-select"))
                                    )
                                        e._c = !0;
                                    else {
                                        if (!t.preventDefault)
                                            return (t.returnValue = !1), !1;
                                        t.preventDefault();
                                    }
                            }
                        }),
                            (e._onChange = function (t) {
                                var n =
                                    (t = t || window.event).target ||
                                    t.srcElement;
                                n &&
                                    (r(n, "pika-select-month")
                                        ? e.gotoMonth(n.value)
                                        : r(n, "pika-select-year") &&
                                          e.gotoYear(n.value));
                            }),
                            (e._onKeyChange = function (t) {
                                if (((t = t || window.event), e.isVisible()))
                                    switch (t.keyCode) {
                                        case 13:
                                        case 27:
                                            n.field && n.field.blur();
                                            break;
                                        case 37:
                                            e.adjustDate("subtract", 1);
                                            break;
                                        case 38:
                                            e.adjustDate("subtract", 7);
                                            break;
                                        case 39:
                                            e.adjustDate("add", 1);
                                            break;
                                        case 40:
                                            e.adjustDate("add", 7);
                                            break;
                                        case 8:
                                        case 46:
                                            e.setDate(null);
                                    }
                            }),
                            (e._parseFieldValue = function () {
                                return n.parse
                                    ? n.parse(n.field.value, n.format)
                                    : new Date(Date.parse(n.field.value));
                            }),
                            (e._onInputChange = function (t) {
                                var n;
                                t.firedBy !== e &&
                                    ((n = e._parseFieldValue()),
                                    u(n) && e.setDate(n),
                                    e._v || e.show());
                            }),
                            (e._onInputFocus = function () {
                                e.show();
                            }),
                            (e._onInputClick = function () {
                                e.show();
                            }),
                            (e._onInputBlur = function () {
                                var t = document.activeElement;
                                do {
                                    if (r(t, "pika-single")) return;
                                } while ((t = t.parentNode));
                                e._c ||
                                    (e._b = setTimeout(function () {
                                        e.hide();
                                    }, 50)),
                                    (e._c = !1);
                            }),
                            (e._onClick = function (t) {
                                var i =
                                        (t = t || window.event).target ||
                                        t.srcElement,
                                    o = i;
                                if (i) {
                                    do {
                                        if (
                                            r(o, "pika-single") ||
                                            o === n.trigger
                                        )
                                            return;
                                    } while ((o = o.parentNode));
                                    e._v &&
                                        i !== n.trigger &&
                                        o !== n.trigger &&
                                        e.hide();
                                }
                            }),
                            (e.el = document.createElement("div")),
                            (e.el.className =
                                "pika-single" +
                                (n.isRTL ? " is-rtl" : "") +
                                (n.theme ? " " + n.theme : "")),
                            i(e.el, "mousedown", e._onMouseDown, !0),
                            i(e.el, "touchend", e._onMouseDown, !0),
                            i(e.el, "change", e._onChange),
                            n.keyboardInput &&
                                i(document, "keydown", e._onKeyChange),
                            n.field &&
                                (n.container
                                    ? n.container.appendChild(e.el)
                                    : n.bound
                                    ? document.body.appendChild(e.el)
                                    : n.field.parentNode.insertBefore(
                                          e.el,
                                          n.field.nextSibling
                                      ),
                                i(n.field, "change", e._onInputChange),
                                n.defaultDate ||
                                    ((n.defaultDate = e._parseFieldValue()),
                                    (n.setDefaultDate = !0)));
                        var o = n.defaultDate;
                        u(o)
                            ? n.setDefaultDate
                                ? e.setDate(o, !0)
                                : e.gotoDate(o)
                            : e.gotoDate(new Date()),
                            n.bound
                                ? (this.hide(),
                                  (e.el.className += " is-bound"),
                                  i(n.trigger, "click", e._onInputClick),
                                  i(n.trigger, "focus", e._onInputFocus),
                                  i(n.trigger, "blur", e._onInputBlur))
                                : this.show();
                    };
                (C.prototype = {
                    config: function (t) {
                        this._o || (this._o = m({}, _, !0));
                        var e = m(this._o, t, !0);
                        (e.isRTL = !!e.isRTL),
                            (e.field =
                                e.field && e.field.nodeName ? e.field : null),
                            (e.theme =
                                "string" == typeof e.theme && e.theme
                                    ? e.theme
                                    : null),
                            (e.bound = !!(void 0 !== e.bound
                                ? e.field && e.bound
                                : e.field)),
                            (e.trigger =
                                e.trigger && e.trigger.nodeName
                                    ? e.trigger
                                    : e.field),
                            (e.disableWeekends = !!e.disableWeekends),
                            (e.disableDayFn =
                                "function" == typeof e.disableDayFn
                                    ? e.disableDayFn
                                    : null);
                        var n = parseInt(e.numberOfMonths, 10) || 1;
                        if (
                            ((e.numberOfMonths = n > 4 ? 4 : n),
                            u(e.minDate) || (e.minDate = !1),
                            u(e.maxDate) || (e.maxDate = !1),
                            e.minDate &&
                                e.maxDate &&
                                e.maxDate < e.minDate &&
                                (e.maxDate = e.minDate = !1),
                            e.minDate && this.setMinDate(e.minDate),
                            e.maxDate && this.setMaxDate(e.maxDate),
                            l(e.yearRange))
                        ) {
                            var i = new Date().getFullYear() - 10;
                            (e.yearRange[0] =
                                parseInt(e.yearRange[0], 10) || i),
                                (e.yearRange[1] =
                                    parseInt(e.yearRange[1], 10) || i);
                        } else
                            (e.yearRange =
                                Math.abs(parseInt(e.yearRange, 10)) ||
                                _.yearRange),
                                e.yearRange > 100 && (e.yearRange = 100);
                        return e;
                    },
                    toString: function (t) {
                        return (
                            (t = t || this._o.format),
                            u(this._d)
                                ? this._o.toString
                                    ? this._o.toString(this._d, t)
                                    : this._d.toDateString()
                                : ""
                        );
                    },
                    getDate: function () {
                        return u(this._d) ? new Date(this._d.getTime()) : null;
                    },
                    setDate: function (t, e) {
                        if (!t)
                            return (
                                (this._d = null),
                                this._o.field &&
                                    ((this._o.field.value = ""),
                                    g(this._o.field, "change", {
                                        firedBy: this,
                                    })),
                                this.draw()
                            );
                        if (
                            ("string" == typeof t &&
                                (t = new Date(Date.parse(t))),
                            u(t))
                        ) {
                            var n = this._o.minDate,
                                i = this._o.maxDate;
                            u(n) && t < n ? (t = n) : u(i) && t > i && (t = i),
                                (this._d = new Date(t.getTime())),
                                p(this._d),
                                this.gotoDate(this._d),
                                this._o.field &&
                                    ((this._o.field.value = this.toString()),
                                    g(this._o.field, "change", {
                                        firedBy: this,
                                    })),
                                e ||
                                    "function" != typeof this._o.onSelect ||
                                    this._o.onSelect.call(this, this.getDate());
                        }
                    },
                    clear: function () {
                        this.setDate(null);
                    },
                    gotoDate: function (t) {
                        var e = !0;
                        if (u(t)) {
                            if (this.calendars) {
                                var n = new Date(
                                        this.calendars[0].year,
                                        this.calendars[0].month,
                                        1
                                    ),
                                    i = new Date(
                                        this.calendars[
                                            this.calendars.length - 1
                                        ].year,
                                        this.calendars[
                                            this.calendars.length - 1
                                        ].month,
                                        1
                                    ),
                                    o = t.getTime();
                                i.setMonth(i.getMonth() + 1),
                                    i.setDate(i.getDate() - 1),
                                    (e = o < n.getTime() || i.getTime() < o);
                            }
                            e &&
                                ((this.calendars = [
                                    {
                                        month: t.getMonth(),
                                        year: t.getFullYear(),
                                    },
                                ]),
                                "right" === this._o.mainCalendar &&
                                    (this.calendars[0].month +=
                                        1 - this._o.numberOfMonths)),
                                this.adjustCalendars();
                        }
                    },
                    adjustDate: function (t, e) {
                        var n,
                            i = this.getDate() || new Date(),
                            o = 24 * parseInt(e) * 60 * 60 * 1e3;
                        "add" === t
                            ? (n = new Date(i.valueOf() + o))
                            : "subtract" === t &&
                              (n = new Date(i.valueOf() - o)),
                            this.setDate(n);
                    },
                    adjustCalendars: function () {
                        this.calendars[0] = v(this.calendars[0]);
                        for (var t = 1; t < this._o.numberOfMonths; t++)
                            this.calendars[t] = v({
                                month: this.calendars[0].month + t,
                                year: this.calendars[0].year,
                            });
                        this.draw();
                    },
                    gotoToday: function () {
                        this.gotoDate(new Date());
                    },
                    gotoMonth: function (t) {
                        isNaN(t) ||
                            ((this.calendars[0].month = parseInt(t, 10)),
                            this.adjustCalendars());
                    },
                    nextMonth: function () {
                        this.calendars[0].month++, this.adjustCalendars();
                    },
                    prevMonth: function () {
                        this.calendars[0].month--, this.adjustCalendars();
                    },
                    gotoYear: function (t) {
                        isNaN(t) ||
                            ((this.calendars[0].year = parseInt(t, 10)),
                            this.adjustCalendars());
                    },
                    setMinDate: function (t) {
                        t instanceof Date
                            ? (p(t),
                              (this._o.minDate = t),
                              (this._o.minYear = t.getFullYear()),
                              (this._o.minMonth = t.getMonth()))
                            : ((this._o.minDate = _.minDate),
                              (this._o.minYear = _.minYear),
                              (this._o.minMonth = _.minMonth),
                              (this._o.startRange = _.startRange)),
                            this.draw();
                    },
                    setMaxDate: function (t) {
                        t instanceof Date
                            ? (p(t),
                              (this._o.maxDate = t),
                              (this._o.maxYear = t.getFullYear()),
                              (this._o.maxMonth = t.getMonth()))
                            : ((this._o.maxDate = _.maxDate),
                              (this._o.maxYear = _.maxYear),
                              (this._o.maxMonth = _.maxMonth),
                              (this._o.endRange = _.endRange)),
                            this.draw();
                    },
                    setStartRange: function (t) {
                        this._o.startRange = t;
                    },
                    setEndRange: function (t) {
                        this._o.endRange = t;
                    },
                    draw: function (t) {
                        if (this._v || t) {
                            var e,
                                n = this._o,
                                i = n.minYear,
                                o = n.maxYear,
                                r = n.minMonth,
                                s = n.maxMonth,
                                a = "";
                            this._y <= i &&
                                ((this._y = i),
                                !isNaN(r) && this._m < r && (this._m = r)),
                                this._y >= o &&
                                    ((this._y = o),
                                    !isNaN(s) && this._m > s && (this._m = s));
                            for (var l = 0; l < n.numberOfMonths; l++)
                                (e =
                                    "pika-title-" +
                                    Math.random()
                                        .toString(36)
                                        .replace(/[^a-z]+/g, "")
                                        .substr(0, 2)),
                                    (a +=
                                        '<div class="pika-lendar">' +
                                        k(
                                            this,
                                            l,
                                            this.calendars[l].year,
                                            this.calendars[l].month,
                                            this.calendars[0].year,
                                            e
                                        ) +
                                        this.render(
                                            this.calendars[l].year,
                                            this.calendars[l].month,
                                            e
                                        ) +
                                        "</div>");
                            (this.el.innerHTML = a),
                                n.bound &&
                                    "hidden" !== n.field.type &&
                                    setTimeout(function () {
                                        n.trigger.focus();
                                    }, 1),
                                "function" == typeof this._o.onDraw &&
                                    this._o.onDraw(this),
                                n.bound &&
                                    n.field.setAttribute(
                                        "aria-label",
                                        n.ariaLabel
                                    );
                        }
                    },
                    adjustPosition: function () {
                        var t, e, n, i, o, r, l, u, c, h, d, p;
                        if (!this._o.container) {
                            if (
                                ((this.el.style.position = "absolute"),
                                (t = this._o.trigger),
                                (e = t),
                                (n = this.el.offsetWidth),
                                (i = this.el.offsetHeight),
                                (o =
                                    window.innerWidth ||
                                    document.documentElement.clientWidth),
                                (r =
                                    window.innerHeight ||
                                    document.documentElement.clientHeight),
                                (l =
                                    window.pageYOffset ||
                                    document.body.scrollTop ||
                                    document.documentElement.scrollTop),
                                (d = !0),
                                (p = !0),
                                "function" == typeof t.getBoundingClientRect)
                            )
                                (h = t.getBoundingClientRect()),
                                    (u = h.left + window.pageXOffset),
                                    (c = h.bottom + window.pageYOffset);
                            else
                                for (
                                    u = e.offsetLeft,
                                        c = e.offsetTop + e.offsetHeight;
                                    (e = e.offsetParent);

                                )
                                    (u += e.offsetLeft), (c += e.offsetTop);
                            ((this._o.reposition && u + n > o) ||
                                (this._o.position.indexOf("right") > -1 &&
                                    u - n + t.offsetWidth > 0)) &&
                                ((u = u - n + t.offsetWidth), (d = !1)),
                                ((this._o.reposition && c + i > r + l) ||
                                    (this._o.position.indexOf("top") > -1 &&
                                        c - i - t.offsetHeight > 0)) &&
                                    ((c = c - i - t.offsetHeight), (p = !1)),
                                (this.el.style.left = u + "px"),
                                (this.el.style.top = c + "px"),
                                s(
                                    this.el,
                                    d ? "left-aligned" : "right-aligned"
                                ),
                                s(
                                    this.el,
                                    p ? "bottom-aligned" : "top-aligned"
                                ),
                                a(
                                    this.el,
                                    d ? "right-aligned" : "left-aligned"
                                ),
                                a(
                                    this.el,
                                    p ? "top-aligned" : "bottom-aligned"
                                );
                        }
                    },
                    render: function (t, e, n) {
                        var i = this._o,
                            o = new Date(),
                            r = d(t, e),
                            s = new Date(t, e, 1).getDay(),
                            a = [],
                            l = [];
                        p(o),
                            i.firstDay > 0 && (s -= i.firstDay) < 0 && (s += 7);
                        for (
                            var h = 0 === e ? 11 : e - 1,
                                m = 11 === e ? 0 : e + 1,
                                g = 0 === e ? t - 1 : t,
                                v = 11 === e ? t + 1 : t,
                                _ = d(g, h),
                                y = r + s,
                                k = y;
                            k > 7;

                        )
                            k -= 7;
                        y += 7 - k;
                        for (var C = !1, D = 0, E = 0; D < y; D++) {
                            var M = new Date(t, e, D - s + 1),
                                A = !!u(this._d) && f(M, this._d),
                                N = f(M, o),
                                V = -1 !== i.events.indexOf(M.toDateString()),
                                I = D < s || D >= r + s,
                                T = D - s + 1,
                                P = e,
                                R = t,
                                O = i.startRange && f(i.startRange, M),
                                B = i.endRange && f(i.endRange, M),
                                L =
                                    i.startRange &&
                                    i.endRange &&
                                    i.startRange < M &&
                                    M < i.endRange,
                                U =
                                    (i.minDate && M < i.minDate) ||
                                    (i.maxDate && M > i.maxDate) ||
                                    (i.disableWeekends && c(M)) ||
                                    (i.disableDayFn && i.disableDayFn(M));
                            I &&
                                (D < s
                                    ? ((T = _ + T), (P = h), (R = g))
                                    : ((T -= r), (P = m), (R = v)));
                            var W = {
                                day: T,
                                month: P,
                                year: R,
                                hasEvent: V,
                                isSelected: A,
                                isToday: N,
                                isDisabled: U,
                                isEmpty: I,
                                isStartRange: O,
                                isEndRange: B,
                                isInRange: L,
                                showDaysInNextAndPreviousMonths:
                                    i.showDaysInNextAndPreviousMonths,
                                enableSelectionDaysInNextAndPreviousMonths:
                                    i.enableSelectionDaysInNextAndPreviousMonths,
                            };
                            i.pickWholeWeek && A && (C = !0),
                                l.push(b(W)),
                                7 == ++E &&
                                    (i.showWeekNumber &&
                                        l.unshift(w(D - s, e, t)),
                                    a.push(x(l, i.isRTL, i.pickWholeWeek, C)),
                                    (l = []),
                                    (E = 0),
                                    (C = !1));
                        }
                        return S(i, a, n);
                    },
                    isVisible: function () {
                        return this._v;
                    },
                    show: function () {
                        this.isVisible() ||
                            ((this._v = !0),
                            this.draw(),
                            a(this.el, "is-hidden"),
                            this._o.bound &&
                                (i(document, "click", this._onClick),
                                this.adjustPosition()),
                            "function" == typeof this._o.onOpen &&
                                this._o.onOpen.call(this));
                    },
                    hide: function () {
                        var t = this._v;
                        !1 !== t &&
                            (this._o.bound &&
                                o(document, "click", this._onClick),
                            (this.el.style.position = "static"),
                            (this.el.style.left = "auto"),
                            (this.el.style.top = "auto"),
                            s(this.el, "is-hidden"),
                            (this._v = !1),
                            void 0 !== t &&
                                "function" == typeof this._o.onClose &&
                                this._o.onClose.call(this));
                    },
                    destroy: function () {
                        var t = this._o;
                        this.hide(),
                            o(this.el, "mousedown", this._onMouseDown, !0),
                            o(this.el, "touchend", this._onMouseDown, !0),
                            o(this.el, "change", this._onChange),
                            t.keyboardInput &&
                                o(document, "keydown", this._onKeyChange),
                            t.field &&
                                (o(t.field, "change", this._onInputChange),
                                t.bound &&
                                    (o(t.trigger, "click", this._onInputClick),
                                    o(t.trigger, "focus", this._onInputFocus),
                                    o(t.trigger, "blur", this._onInputBlur))),
                            this.el.parentNode &&
                                this.el.parentNode.removeChild(this.el);
                    },
                }),
                    (e.exports = C);
            },
        });
})(this);
//# sourceMappingURL=bokeh-widgets.min.js.map
