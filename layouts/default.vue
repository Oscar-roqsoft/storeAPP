<script setup>
app.get('/', (req, res) => {
    res.render('something', { layout: false });
})
</script>