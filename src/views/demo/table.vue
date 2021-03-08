<template>
  <div>
    <ccc-table :options="options" :sources="tableData" @change="onChange"></ccc-table>
  </div>
</template>

<script>
import demoApi from '@/api/demo.js';
export default {
  data() {
    return {
      options: {},
      tableData: []
    };
  },
  created() {
    this.options = {
      columns: [
        {
          prop: 'name',
          label: 'name',
          width: 200
        },
        {
          prop: 'formatter',
          label: 'formatter',
          width: 200,
          formatter: (row, column, cellValue) => {
            switch (cellValue) {
              case 'male':
                return 1;
              case 'female':
                return 0;
            }
          }
        },
        {
          type: 'progress',
          prop: 'progress',
          label: 'progress',
          width: 200
        },
        {
          prop: 'country',
          label: 'country',
          width: 200
        },
        {
          prop: 'date',
          label: 'date',
          width: 200
        },
        {
          prop: 'email',
          label: 'email'
        }
      ],
      handle: {
        label: 'handle',
        width: 200,
        buttons: [
          {
            text: 'View',
            click: row => {
              console.log('View');
              console.log(row);
            }
          },
          {
            text: 'Delete',
            click: row => {
              console.log('Delete');
              console.log(row);
            }
          }
        ]
      },
      pagination: {
        total: 0,
        page: 1
      }
    };
  },
  mounted() {
    this.getRandomuserData(1);
  },
  methods: {
    getRandomuserData(page) {
      demoApi.getRandomuserData(10, page, 'ccc').then(response => {
        this.tableData = response.data.results.map(e => {
          return {
            name: `${e.name.first} ${e.name.last}`,
            formatter: e.gender,
            progress: e.dob.age,
            country: e.location.country,
            date: e.dob.date.slice(0, 19).replace(/T/, ' '),
            email: e.email
          };
        });
        this.options.pagination.total = 50;
        this.options.pagination.page = response.data.info.page;
      });
    },
    onChange(page) {
      this.getRandomuserData(page);
    }
  }
};
</script>
