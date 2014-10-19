require 'yaml'

destination_dir = 'category/'

# Load categories from YAML file
categories = YAML.load_file('_data/categories.yml')

for category in categories
    puts category[0]
    File.open(destination_dir + category[0] + '.html', 'w') {|f|
        f.write("---
layout: category
category: " + category[0] + "
permalink: category/" + category[0] + "/
---")
    }
end