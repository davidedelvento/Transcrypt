	__nest__ (
		__all__,
		'cats_submodule', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var getTaxoTag = function () {
						return 'cat';
					};
					__pragma__ ('<all>')
						__all__.getTaxoTag = getTaxoTag;
					__pragma__ ('</all>')
				}
			}
		}
	);
		var csm =  __init__ (__world__.cats_submodule);
		var Cat = __class__ ('Cat', [Animal], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, py_name) {
				self.species = csm.getTaxoTag ();
				__super__ (Cat, '__init__') (self, py_name, 'fish', 'mraaaw');
			});}
		});
		__pragma__ ('<use>' +
			'cats_submodule' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Cat = Cat;
		__pragma__ ('</all>')
