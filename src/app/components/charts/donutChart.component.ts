import { StoreService, Expense } from '../store/store.service';

interface IDonutChartScope extends angular.IScope {
  data: number[];
  payment: string;
  expenses: Expense[];
  calculateData (expenses: Expense[]): any[];
}

/** @ngInject */
export function donutChart(): angular.IDirective {

  return {
    restrict: 'E',
    replace: false,
    scope: {
      payment: '@'
    },
    link: (scope: IDonutChartScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes) => {
      let color = d3.scale.ordinal().range([
        'rgba(50, 100, 200, 0.9)',
        'rgba(50, 100, 200, 0.7)',
        'rgba(50, 100, 200, 0.5)',
        'rgba(50, 100, 200, 0.3)',
        'rgba(50, 100, 200, 0.1)'
        ]);
      let outerR = 100;
      let innerR = 70;
      let fontSize = 12 * outerR / 100;

      // render the chart
      let render = (expenses: Expense[]) => {
        let data = scope.calculateData(expenses);

        // remove all previous items before render
        d3.select(element[0]).selectAll('*').remove();

        // creates the Chart
        let canvas = d3.select(element[0])
          .append('svg')
          .attr('width', outerR * 2)
          .attr('height', outerR * 2); // creates the paintable canvas

        let group = canvas.append('g').attr('transform', 'translate(' + outerR + ',' + outerR + ')'); // sets the location
        let arc = d3.svg.arc().innerRadius(innerR).outerRadius(outerR); // creates the donut look
        let pie = d3.layout.pie().value((d: any) => {
          return d.amount;
        });
        let arcs = group.selectAll('.arc')
          .data( pie(data) )
          .enter()
          .append('g')
          .attr('class', 'arc');

        arcs.append('path')
          .attr('d', arc)
          .attr('fill', (d: any) => { return color(d.data.amount); });

        arcs.append('text')
          .attr('transform', (d: any) => { return 'translate(' + arc.centroid(d) + ')'; })
          .attr('text-anchor', 'middle')
          .attr('font-size', fontSize + 'px')
          .text((d: any) => { return d.data.category; });

        // append Text at center of donut
        canvas
          .append('text')
          .attr('text-anchor', 'middle')
          .attr('font-size', fontSize + 'px')
          .attr('transform', 'translate(' + outerR + ',' + outerR + ')')
          .text((d: any) => { return scope.payment; });
      };

      scope.$watch('expenses', function(newValue: Expense[], oldValue: Expense[]) {
        return render(newValue);
      }, true);
    },
    /** @ngInject */
    controller: ($scope: IDonutChartScope, store: StoreService) => {
      $scope.expenses = store.expenses;

      $scope.calculateData = (expenses: Expense[]) => {
        let categories = expenses.filter((expense: Expense) => {
          return expense.paymentMode === $scope.payment;
        }).groupBy('category');

        let data = [];

        for (let category in categories) {
          if (categories.hasOwnProperty(category)) {
            let totalAmount = categories[category].reduce((acc: number, expense: Expense) => {
              return acc = acc + expense.amount;
            }, 0);

            data.push({
              category: category,
              amount: totalAmount
            });
          }
        }

        return data;
      };
    }
  };

}
