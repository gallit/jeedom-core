/*
  Highcharts JS v7.1.2 (2019-06-03)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Fus

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/indicators/pivot-points",["highcharts","highcharts/modules/stock"],function(d){c(d);c.Highcharts=d;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function d(c,d,r,u){c.hasOwnProperty(d)||(c[d]=u.apply(null,r))}c=c?c._modules:{};d(c,"indicators/pivot-points.src.js",[c["parts/Globals.js"]],function(c){function d(a,b){var f=a.series.pointArrayMap,
c=f.length;for(t.prototype.pointClass.prototype[b].call(a);c--;)b="dataLabel"+f[c],a[b]&&a[b].element&&a[b].destroy(),a[b]=null}var r=c.defined,u=c.isArray,t=c.seriesTypes.sma;c.seriesType("pivotpoints","sma",{params:{period:28,algorithm:"standard"},marker:{enabled:!1},enableMouseTracking:!1,dataLabels:{enabled:!0,format:"{point.pivotLine}"},dataGrouping:{approximation:"averages"}},{nameBase:"Pivot Points",pointArrayMap:"R4 R3 R2 R1 P S1 S2 S3 S4".split(" "),pointValKey:"P",toYData:function(a){return[a.P]},
translate:function(){var a=this;t.prototype.translate.apply(a);a.points.forEach(function(b){a.pointArrayMap.forEach(function(f){r(b[f])&&(b["plot"+f]=a.yAxis.toPixels(b[f],!0))})});a.plotEndPoint=a.xAxis.toPixels(a.endPoint,!0)},getGraphPath:function(a){for(var b=this,f=a.length,c=[[],[],[],[],[],[],[],[],[]],e=[],d=b.plotEndPoint,p=b.pointArrayMap.length,g,h,k;f--;){h=a[f];for(k=0;k<p;k++)g=b.pointArrayMap[k],r(h[g])&&c[k].push({plotX:h.plotX,plotY:h["plot"+g],isNull:!1},{plotX:d,plotY:h["plot"+
g],isNull:!1},{plotX:d,plotY:null,isNull:!0});d=h.plotX}c.forEach(function(a){e=e.concat(t.prototype.getGraphPath.call(b,a))});return e},drawDataLabels:function(){var a=this,b=a.pointArrayMap,c,d,e,m;a.options.dataLabels.enabled&&(d=a.points.length,b.concat([!1]).forEach(function(f,g){for(m=d;m--;)e=a.points[m],f?(e.y=e[f],e.pivotLine=f,e.plotY=e["plot"+f],c=e["dataLabel"+f],g&&(e["dataLabel"+b[g-1]]=e.dataLabel),e.dataLabels||(e.dataLabels=[]),e.dataLabels[0]=e.dataLabel=c=c&&c.element?c:null):e["dataLabel"+
b[g-1]]=e.dataLabel;t.prototype.drawDataLabels.apply(a,arguments)}))},getValues:function(a,b){var c=b.period,d=a.xData,e=(a=a.yData)?a.length:0;b=this[b.algorithm+"Placement"];var m=[],p,g=[],h=[],k,q,l,n;if(d.length<c||!u(a[0])||4!==a[0].length)return!1;for(n=c+1;n<=e+c;n+=c)q=d.slice(n-c-1,n),l=a.slice(n-c-1,n),k=q.length,p=q[k-1],l=this.getPivotAndHLC(l),l=b(l),l=m.push([p].concat(l)),g.push(p),h.push(m[l-1].slice(1));this.endPoint=q[0]+(p-q[0])/k*c;return{values:m,xData:g,yData:h}},getPivotAndHLC:function(a){var b=
-Infinity,c=Infinity,d=a[a.length-1][3];a.forEach(function(a){b=Math.max(b,a[1]);c=Math.min(c,a[2])});return[(b+c+d)/3,b,c,d]},standardPlacement:function(a){var b=a[1]-a[2];return[null,null,a[0]+b,2*a[0]-a[2],a[0],2*a[0]-a[1],a[0]-b,null,null]},camarillaPlacement:function(a){var b=a[1]-a[2];return[a[3]+1.5*b,a[3]+1.25*b,a[3]+1.1666*b,a[3]+1.0833*b,a[0],a[3]-1.0833*b,a[3]-1.1666*b,a[3]-1.25*b,a[3]-1.5*b]},fibonacciPlacement:function(a){var b=a[1]-a[2];return[null,a[0]+b,a[0]+.618*b,a[0]+.382*b,a[0],
a[0]-.382*b,a[0]-.618*b,a[0]-b,null]}},{destroyElements:function(){d(this,"destroyElements")},destroy:function(){d(this,"destroyElements")}})});d(c,"masters/indicators/pivot-points.src.js",[],function(){})});
//# sourceMappingURL=pivot-points.js.map