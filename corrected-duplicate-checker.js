import fs from 'fs';

console.log('🔍 Corrected Product ID Duplicate Checker');
console.log('=======================================\n');

try {
  // Read the correct products file (not the lib file)
  console.log('Reading main products.js file...');
  const content = fs.readFileSync('products.js', 'utf8');
  
  // Extract all IDs
  const idMatches = content.match(/id:\s*['"]([^'"]+)['"]/g);
  
  const ids = idMatches ? idMatches.map(match => {
    // More reliable extraction method
    const matchResult = match.match(/id:\s*['"]([^'"]+)['"]/);
    return matchResult ? matchResult[1] : null;
  }).filter(id => id !== null) : [];
  
  console.log('Total IDs found:', ids.length);
  
  // Find duplicates
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  const uniqueDuplicates = [...new Set(duplicates)];
  
  console.log('Unique IDs:', [...new Set(ids)].length);
  console.log('Duplicate IDs:', uniqueDuplicates);
  
  // Show which IDs are duplicated and their count
  const idCount = {};
  ids.forEach(id => {
    idCount[id] = (idCount[id] || 0) + 1;
  });
  
  const duplicatedIds = Object.keys(idCount).filter(id => idCount[id] > 1);
  
  if (duplicatedIds.length > 0) {
    console.log('\nDuplicated IDs with counts:');
    duplicatedIds.forEach(id => {
      console.log(` ${id}: ${idCount[id]} occurrences`);
    });
    
    console.log('\n⚠️  IMPACT OF REMOVING DUPLICATES:');
    console.log('   Pages that would be affected:');
    console.log('   - Product detail pages (/product/:id)');
    console.log('   - Shopping cart functionality');
    console.log('   - Wishlist functionality');
    console.log('   - Search results');
    console.log('   - Related products sections');
    console.log('   - Featured products sections');
    console.log('   - Backend API endpoints');
  } else {
    console.log('\n✅ No duplicate IDs found!');
    console.log('   All product IDs are unique.');
  }
  
  // Additional analysis
  console.log('\n📈 STATISTICS:');
  console.log('==============');
  console.log(`   Total ID entries: ${ids.length}`);
  console.log(`   Unique IDs: ${Object.keys(idCount).length}`);
  console.log(`   Duplicate IDs: ${duplicatedIds.length}`);
  console.log(`   Duplicate rate: ${(duplicatedIds.length / Math.max(1, Object.keys(idCount).length) * 100).toFixed(2)}%`);
  
} catch (error) {
  console.log('❌ Error reading or processing the file:');
  console.log(error.message);
  console.log('\nThis might indicate:');
  console.log('1. The file path is incorrect');
  console.log('2. There\'s a syntax error in the products.js file');
  console.log('3. Permission issues accessing the file');
}