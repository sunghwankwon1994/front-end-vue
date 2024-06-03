<template>
  <div class="card">
    <div class="card-header">ChildB</div>
    <div class="card-body">
        <p>productNo: {{ productNo }}</p>
        <p>productKind: {{ productKind }}</p>
        <p>product: {{product.no }}, {{ product.kind }}</p>
        <p>No: {{  prop.no }}</p>
        <p>Kind: {{ prop.kind }}</p>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps(["productNo", "productKind", "product", "no", "kind"]);

console.log("productNo", prop.productNo);
console.log("productKind", prop.productKind);
console.log("product", JSON.parse(JSON.stringify(prop.product)));
console.log("No", prop.no);
console.log("Kind", prop.kind);

</script>

<style scoped></style>
