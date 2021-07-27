import React from 'react'

function Search (props) {
    const { search, change } = props

    function changeSearch (e) {
        const { name, value } = e.target
        change(name, value)
    }

    function subType () {
        if (search.type === 'animalProducts'){
            return (<>
                <option value = 'livestock'>Livestock</option>
                <option value = 'poultry'>Poultry</option>
                </>
        )}else if (search.type === 'cereal'){
            return (<>
                <option value = 'maize'>Maize</option>
                <option value = 'barley'>Barley</option>
                <option value = 'millet'>Millet</option>
                <option value = 'sorghum'>Sorghum</option>
                <option value = 'wheat'>Wheat</option>
                <option value = 'rice'>Rice</option>
                </>
        )} else if (search.type === 'fruits'){
            return (<>
                <option value = 'avocado'>Avocado</option>
                <option value = 'bananas'>Bananas</option>
                <option value = 'lemons'>Lemons</option>
                <option value = 'pineapples'>Pineapples</option>
                </>
        )}else if (search.type === 'other'){
            return (<>
                <option value = 'coffee'>Coffee</option>
                <option value = 'tea'>Tea</option>
                <option value = 'tobacco'>Tobacco</option>
                <option value = 'vanilla'>Vanilla</option>
                </>
        )}else if (search.type === 'rootsAndTubers'){
            return (<>
                <option value = 'cassava'>Cassava</option>
                <option value = 'potatoes'>Potatoes</option>
                </>
        )}else if (search.type === 'seedsAndNuts'){
            return(<>
                <option value = 'nuts'>Nuts</option>
                <option value = 'simsim'>Simsim</option>
                <option value = 'sunflowers'>Sunflowers</option>
                </>
        )}else if (search.typ === 'vegetables'){
            return (<>
                <option value = 'brinjals'>Brinjals</option>
                <option value = 'cabbages'>Cabbages</option>
                <option value = 'capsicums'>Capsicums</option>
                <option value = 'carrots'>Carrots</option>
                <option value = 'cauliflower'>Cauliflower</option>
                <option value = 'chillies'>Chillies</option>
                <option value = 'cucumber'>Cucumber</option>
                <option value = 'ginger'>Ginger</option>
                <option value = 'kales'>Kales</option>
                <option value = 'lettuce'>Lettuce</option>
                <option value = 'onions'>Onions</option>
                <option value = 'tomatoes'>Tomatoes</option>
                </>
        )}
    }

    return (
      <div className='search'>
        <div className='search-bar'>
            <select
                name='type'
                id='type'
                value={search.type}
                onChange={changeSearch}
            >
                <option value=''>--Select a Product Type--</option>
                <option value = 'animalProducts'>Animal Products</option>
                <option value = 'beans'>Beans</option>
                <option value = 'cereals'>Cereals</option>
                <option value = 'fruits'>Fruits</option>
                <option value = 'other'>Other</option>
                <option value = 'peas'>Peas</option>
                <option value = 'rootsAndTubers'>Roots and Tubers</option>
                <option value = 'seedsAndNuts'>Seeds and Nuts</option>
                <option value = 'vegetables'>Vegetables</option>
            </select>
            <select
                name='subtype'
                id='subtype'
                value={search.subtype}
                onChange={changeSearch}
            >
                <option value=''>--Select a Product SubType--</option>
                {subType()}
                <option value='other'>Other</option>
            </select>
            <input
                type='text' 
                value={search.name} 
                onChange={changeSearch} 
                name='name' 
                placeholder='Item Name' 
            />
        </div>
      </div>
    )
}

export default Search