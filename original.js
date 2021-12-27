(this.webpackJsonponboard = this.webpackJsonponboard || []).push([
  [3],
  {
    20: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    24: function(e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, 'a', function() {
        return o;
      });
    },
    50: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n(102);
      var o = n(90);
      function i(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) return Object(r.a)(e);
          })(e) ||
          (function(e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          Object(o.a)(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
    },
    86: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n(90);
      function o(e, t) {
        var n;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = Object(r.a)(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var o = 0,
              i = function() {};
            return {
              s: i,
              n: function() {
                return o >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[o++],
                    };
              },
              e: function(e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          c = !0,
          s = !1;
        return {
          s: function() {
            n = e[Symbol.iterator]();
          },
          n: function() {
            var e = n.next();
            return (c = e.done), e;
          },
          e: function(e) {
            (s = !0), (a = e);
          },
          f: function() {
            try {
              c || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
    },
    90: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n(102);
      function o(e, t) {
        if (e) {
          if ('string' === typeof e) return Object(r.a)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r.a)(e, t)
              : void 0
          );
        }
      }
    },
    // some sort of array cloning?
    102: function(e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    601: function(n, e, i) {
      'use strict';
      i.r(e);
      var a = i(86),
        r = i(50),
        // , t = i(20)
        _classCallCheck = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        },
        s = i(24), // basically clazz.prototype.method = function() {}
        encodings = i(837),
        vocab = 'bpe vocab',
        range = function(n, e) {
          return Array.from(Array(e).keys()).slice(n);
        },
        ord = function(n) {
          return n.charCodeAt(0);
        },
        regex = /bpe regex/g,
        tokenizer = (function() {
          function n() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            _classCallCheck(this, n);
            var i = e.type,
              a = void 0 === i ? 'gpt3' : i;
            (this.encodings = encodings),
              (this.vocab = n.mockVocab || vocab),
              (this.textEncoder = new TextEncoder()),
              (this.textDecoder = new TextDecoder()),
              (this.nMergedSpaces = 'codex' === a ? 24 : 0),
              (this.nVocab = 50257 + this.nMergedSpaces),
              this.initialize();
          }
          return (
            Object(s.a)(
              n,
              [
                {
                  key: 'initialize',
                  value: function() {
                    var n = this;
                    if (((this.decodings = {}), this.vocab.length < 100))
                      throw new Error(
                        'Tokenizer vocab file did not load correctly'
                      );
                    var vocabLines = this.vocab.split('\n'),
                      bpeMerges = vocabLines
                        .slice(1, vocabLines.length - 1)
                        .map(function(line) {
                          return line.split(/(\s+)/).filter(function(part) {
                            return part.trim().length > 0;
                          });
                        });
                    if (this.nMergedSpaces) {
                      for (var a = 1; a < this.nMergedSpaces; a++)
                        for (var r = 1; r < this.nMergedSpaces; r++)
                          a + r <= this.nMergedSpaces &&
                            bpeMerges.push(['\u0120'.repeat(a), '\u0120'.repeat(r)]);
                      for (var t = 0; t < this.nMergedSpaces; t++)
                        this.encodings['\u0120'.repeat(t + 2)] =
                          this.nVocab - this.nMergedSpaces + t;
                    }
                    Object.keys(this.encodings).forEach(function(e) {
                      n.decodings[n.encodings[e]] = e;
                    }),
                      (this.byteEncoder = this.bytesToUnicode()),
                      (this.byteDecoder = {}),
                      Object.keys(this.byteEncoder).forEach(function(e) {
                        n.byteDecoder[n.byteEncoder[e]] = e;
                      }),
                      (this.bpeRanks = this.zip(bpeMerges, range(0, bpeMerges.length))),
                      (this.cache = {});
                  },
                },
                {
                  key: 'zip',
                  value: function(n, e) {
                    var i = {};
                    return (
                      n.forEach(function(a, r) {
                        i[n[r]] = e[r];
                      }),
                      i
                    );
                  },
                },
                {
                  key: 'bytesToUnicode',
                  value: function() {
                    for (
                      var n = range(ord('!'), ord('~') + 1).concat(
                          range(ord('\xa1'), ord('\xac') + 1),
                          range(ord('\xae'), ord('\xff') + 1)
                        ),
                        e = n.slice(),
                        i = 0,
                        a = 0;
                      a < Math.pow(2, 8);
                      a++
                    )
                      n.includes(a) ||
                        (n.push(a), e.push(Math.pow(2, 8) + i), (i += 1));
                    return (
                      (e = e.map(function(n) {
                        return (function(n) {
                          return String.fromCharCode(n);
                        })(n);
                      })),
                      this.zip(n, e)
                    );
                  },
                },
                {
                  key: 'getPairs',
                  value: function(n) {
                    for (
                      var e = new Set(), i = n[0], a = 1;
                      a < n.length;
                      a++
                    ) {
                      var r = n[a];
                      e.add([i, r]), (i = r);
                    }
                    return e;
                  },
                },
                {
                  key: 'bpe',
                  value: function(n) {
                    var e = this;
                    if (this.cache.hasOwnProperty(n)) return this.cache[n];
                    var i = n.split(''),
                      a = this.getPairs(i);
                    if (!a) return n;
                    for (
                      var t = function() {
                        var n = {};
                        Array.from(a).forEach(function(i) {
                          var a = e.bpeRanks[i];
                          n[isNaN(a) ? 1e11 : a] = i;
                        });
                        var t =
                          n[
                            Math.min.apply(
                              Math,
                              Object(r.a)(
                                Object.keys(n).map(function(n) {
                                  return parseInt(n);
                                })
                              )
                            )
                          ];
                        if (!e.bpeRanks.hasOwnProperty(t)) return 'break';
                        for (
                          var s = t[0], o = t[1], l = [], c = 0;
                          c < i.length;

                        ) {
                          var u = i.indexOf(s, c);
                          if (-1 === u) {
                            l = l.concat(i.slice(c));
                            break;
                          }
                          (l = l.concat(i.slice(c, u))),
                            i[(c = u)] === s &&
                            c < i.length - 1 &&
                            i[c + 1] === o
                              ? (l.push(s + o), (c += 2))
                              : (l.push(i[c]), (c += 1));
                        }
                        if (1 === (i = l).length) return 'break';
                        a = e.getPairs(i);
                      };
                      ;

                    ) {
                      if ('break' === t()) break;
                    }
                    return (i = i.join(' ')), (this.cache[n] = i), i;
                  },
                },
                {
                  key: 'encode',
                  value: function(text) {
                    var e,
                      self = this,
                      bpeTokens = [],
                      texts = [],
                      matches = text.match(regex) || [],
                      o = Object(a.a)(matches);
                    try {
                      for (o.s(); !(e = o.n()).done; ) {
                        var token = e.value;
                        token = Array.from(this.textEncoder.encode(token))
                          .map(function(n) {
                            return self.byteEncoder[n.toString()];
                          })
                          .join('');
                        var newTokens = this.bpe(token)
                          .split(' ')
                          .map(function(n) {
                            return self.encodings[n];
                          });
                        (bpeTokens = bpeTokens.concat(newTokens)),
                          (texts = texts.concat(
                            newTokens.map(function(n) {
                              return self.decode([n]);
                            })
                          ));
                      }
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                    return {
                      bpe: bpeTokens,
                      text: texts,
                    };
                  },
                },
                {
                  key: 'decode',
                  value: function(tokens) {
                    var self = this,
                      text = tokens
                        .map(function(n) {
                          return self.decodings[n];
                        })
                        .join('');
                    return this.textDecoder.decode(
                      new Uint8Array(
                        text.split('').map(function(n) {
                          return self.byteDecoder[n];
                        })
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'isSupported',
                  value: function() {
                    return 'undefined' !== typeof TextEncoder;
                  },
                },
              ]
            ),
            n
          );
        })();
      e.default = tokenizer;
    },
    837: function(n) {
      n.exports = JSON.parse('{"encodings": "json"}');
    },
  },
]);
